// Copyright 2022-2023 the Chili authors. All rights reserved. MPL-2.0 license.

import {
    CancellationToken,
    Color,
    IEventHandler,
    IShape,
    IView,
    MessageType,
    ObjectSnapType,
    PubSub,
    ShapeType,
    Validation,
    VertexMeshData,
    XYZ,
} from "chili-core";

import { ISnap, MouseAndDetected, SnapChangedHandler, SnapedData } from "../interfaces";
import { ShapePreviewer, Validator } from "./interfaces";

export interface SnapEventData {
    cancellationToken: CancellationToken;
    snaps: ISnap[];
    snapChangedHandlers?: SnapChangedHandler[];
    validator?: Validator;
    preview?: ShapePreviewer;
}

export abstract class SnapEventHandler implements IEventHandler {
    private _tempPointId?: number;
    private _tempShapeId?: number;
    protected _snaped?: SnapedData;
    private readonly _snaps: ISnap[];
    private readonly _snapedChangedHandlers: SnapChangedHandler[];

    constructor(private readonly data: SnapEventData) {
        this._snaps = [...data.snaps];
        this._snapedChangedHandlers =
            data.snapChangedHandlers === undefined ? [] : [...data.snapChangedHandlers];
        PubSub.default.sub("snapChanged", this.onSnapChanged);
    }

    private onSnapChanged = (snapType: ObjectSnapType) => {
        this._snaps.forEach((x) => x.onSnapTypeChanged(snapType));
    };

    get snaped() {
        return this._snaped;
    }

    private stopSnap(view: IView) {
        this._snapedChangedHandlers.length = 0;
        this.data.cancellationToken.cancel();
        this.clearSnapTip();
        this.removeInput();
        this.removeTempShapes(view);
        this._snaps.forEach((x) => x.clear());
        view.viewer.redraw();
    }

    private removeInput() {
        PubSub.default.pub("clearInput");
    }

    pointerMove(view: IView, event: MouseEvent): void {
        this.removeTempObject(view);
        this._snaped = this.getSnaped(ShapeType.Edge, view, event);
        this._snapedChangedHandlers.forEach((x) => x.onSnapChanged(view, this._snaped));
        if (this._snaped !== undefined) {
            this.showTempShape(this._snaped.point, view);
            this.switchSnapedTip(this._snaped.info);
        } else {
            this.clearSnapTip();
        }
        view.viewer.redraw();
    }

    private getSnaped(shapeType: ShapeType, view: IView, event: MouseEvent) {
        let data = this.getDetectedData(shapeType, view, event);
        for (const snap of this._snaps) {
            let snaped = snap.snap(data);
            if (snaped === undefined) continue;
            if (this.data.validator?.(snaped.point)) {
                return snaped;
            }
        }

        return undefined;
    }

    private getDetectedData(shapeType: ShapeType, view: IView, event: MouseEvent): MouseAndDetected {
        let shapes = view
            .detected(shapeType, event.offsetX, event.offsetY, event.shiftKey)
            .map((x) => x.shape)
            .filter((x) => x !== undefined) as IShape[];
        return {
            shapes,
            view,
            mx: event.offsetX,
            my: event.offsetY,
        };
    }

    private clearSnapTip() {
        PubSub.default.pub("clearFloatTip");
    }

    private switchSnapedTip(msg: string | undefined) {
        if (msg === undefined) {
            this.clearSnapTip();
            return;
        }
        PubSub.default.pub("showFloatTip", MessageType.info, msg);
    }

    private removeTempObject(view: IView) {
        this.removeTempShapes(view);
        this._snaps.forEach((x) => x.removeDynamicObject());
    }

    private showTempShape(point: XYZ, view: IView) {
        let data = VertexMeshData.from(point, 3, Color.fromHex(0xff0000));
        this._tempPointId = view.viewer.visual.context.temporaryDisplay(data);
        let shape = this.data.preview?.(point);
        if (shape !== undefined) {
            let edges = shape.mesh().edges;
            if (edges !== undefined) this._tempShapeId = view.viewer.visual.context.temporaryDisplay(edges);
        }
    }

    private removeTempShapes(view: IView) {
        if (this._tempPointId !== undefined) {
            view.viewer.visual.context.temporaryRemove(this._tempPointId);
            this._tempPointId = undefined;
        }
        if (this._tempShapeId !== undefined) {
            view.viewer.visual.context.temporaryRemove(this._tempShapeId);
            this._tempShapeId = undefined;
        }
    }

    pointerDown(view: IView, event: MouseEvent): void {
        if (event.button === 0) {
            this.stopSnap(view);
        }
    }
    pointerUp(view: IView, event: MouseEvent): void {}
    mouseWheel(view: IView, event: WheelEvent): void {
        view.viewer.redraw();
    }
    keyDown(view: IView, event: KeyboardEvent): void {
        if (event.key === "Escape") {
            this._snaped = undefined;
            this.stopSnap(view);
        } else if (["-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) {
            PubSub.default.pub(
                "showInput",
                (t) => this.isValidInput(t),
                (text: string) => this.handleInput(view, text)
            );
        }
    }

    private handleInput = (view: IView, text: string) => {
        this._snaped = {
            view,
            point: this.getPointFromInput(view, text),
            shapes: [],
        };
        this.stopSnap(view);
    };

    protected abstract getPointFromInput(view: IView, text: string): XYZ;

    protected abstract isValidInput(text: string): Validation;

    keyUp(view: IView, event: KeyboardEvent): void {}
}
