// Copyright 2022-2023 the Chili authors. All rights reserved. AGPL-3.0 license.

import { IDocument, IView, ShapeType, VisualShapeData, VisualState } from "chili-core";
import { SelectionHandler } from "./selectionEventHandler";

export class ShapeSelectionHandler extends SelectionHandler {
    private _shapes: Set<VisualShapeData> = new Set();

    shapes(): VisualShapeData[] {
        return [...this._shapes];
    }

    override clearSelected(document: IDocument): void {
        let highlighter = document.visual.highlighter;
        for (const shape of this._shapes.values()) {
            highlighter.removeState(
                shape.owner,
                VisualState.selected,
                shape.shape.shapeType,
                ...shape.indexes,
            );
        }
        this._shapes.clear();
    }

    protected override select(view: IView, shapes: VisualShapeData[], event: PointerEvent): number {
        if (event.shiftKey) {
            shapes.forEach((x) => {
                if (this._shapes.has(x)) {
                    this.removeSelected(x);
                } else {
                    this.addSelected(x);
                }
            });
        } else {
            this.clearSelected(view.document.visual.document);
            shapes.forEach((x) => {
                this.addSelected(x);
            });
        }
        return this._shapes.size;
    }

    private removeSelected(shape: VisualShapeData) {
        this._shapes.delete(shape);
        let highlighter = shape.owner.geometryEngity.document.visual.highlighter;
        highlighter.removeState(shape.owner, VisualState.selected, shape.shape.shapeType, ...shape.indexes);
    }

    private addSelected(shape: VisualShapeData) {
        let highlighter = shape.owner.geometryEngity.document.visual.highlighter;
        highlighter.addState(shape.owner, VisualState.selected, this.shapeType, ...shape.indexes);
        this._shapes.add(shape);
    }
}
