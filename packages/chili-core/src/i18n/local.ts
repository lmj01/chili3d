// Copyright 2022-2023 the Chili authors. All rights reserved. AGPL-3.0 license.

export type Locale = {
    language: string;
    translation: Translation;
};

export type Translation = Record<I18nKeys, string>;

export type I18nKeys =
    | "common.color"
    | "common.name"
    | "common.matrix"
    | "common.opacity"
    | "common.normal"
    | "common.confirm"
    | "common.cancel"
    | "common.clone"
    | "common.length"
    | "common.angle"
    | "common.type"
    | "home.welcome"
    | "home.recent"
    | "body.arc"
    | "body.bolean"
    | "body.line"
    | "body.rect"
    | "body.circle"
    | "body.box"
    | "body.polygon"
    | "body.wire"
    | "body.prism"
    | "body.revol"
    | "body.sweep"
    | "body.fuse"
    | "body.imported"
    | "body.face"
    | "ribbon.tab.file"
    | "ribbon.tab.draw"
    | "ribbon.tab.startup"
    | "ribbon.group.draw"
    | "ribbon.group.modify"
    | "ribbon.group.converter"
    | "ribbon.group.selection"
    | "ribbon.group.boolean"
    | "ribbon.group.workingPlane"
    | "ribbon.group.importExport"
    | "items.header"
    | "items.tool.newFolder"
    | "items.tool.expandAll"
    | "items.tool.unexpandAll"
    | "items.tool.delete"
    | "properties.header"
    | "properties.multivalue"
    | "properties.group.transform"
    | "model.translation"
    | "model.rotation"
    | "model.scale"
    | "model.visible"
    | "vertex.point"
    | "line.type.line"
    | "line.type.xline"
    | "line.start"
    | "line.end"
    | "arc.start"
    | "arc.angle"
    | "circle.center"
    | "circle.radius"
    | "box.dx"
    | "box.dy"
    | "box.dz"
    | "rect.dx"
    | "rect.dy"
    | "polygon.points"
    | "command.boolean.common"
    | "command.boolean.fuse"
    | "command.boolean.cut"
    | "command.faceable.isFace"
    | "command.document.save"
    | "command.document.saveToFile"
    | "command.document.saveAs"
    | "command.document.new"
    | "command.document.open"
    | "command.arc"
    | "command.delete"
    | "command.redo"
    | "command.newGroup"
    | "command.newFolder"
    | "command.undo"
    | "command.line"
    | "command.line.isConnected"
    | "command.box"
    | "command.circle"
    | "command.rect"
    | "command.move"
    | "command.copy"
    | "command.mirror"
    | "command.array"
    | "command.rotate"
    | "command.polygon"
    | "command.prism"
    | "command.revol"
    | "command.sweep"
    | "command.fuse"
    | "command.toWire"
    | "command.toFace"
    | "command.mode.repeat"
    | "command.import"
    | "command.export.iges"
    | "command.export.step"
    | "operate.pickFistPoint"
    | "operate.pickNextPoint"
    | "operate.pickCircleCenter"
    | "operate.pickRadius"
    | "snap.end"
    | "snap.mid"
    | "snap.center"
    | "snap.intersection"
    | "snap.perpendicular"
    | "axis.x"
    | "axis.y"
    | "axis.z"
    | "toast.command.{0}excuting"
    | "toast.document.saved"
    | "toast.document.noActived"
    | "toast.converter.invalidColor"
    | "toast.converter.error"
    | "toast.read.error"
    | "toast.select.noSelected"
    | "prompt.default"
    | "prompt.select.models"
    | "prompt.select.edges"
    | "prompt.select.wires"
    | "prompt.select.faces"
    | "prompt.select.shape"
    | "prompt.select.vertexs"
    | "prompt.polygon.close"
    | "prompt.select.noModelSelected"
    | "prompt.saveDocument{0}"
    | "prompt.deleteDocument{0}"
    | "error.default"
    | "error.input.unsupportedInputs"
    | "error.input.invalidNumber"
    | "error.input.threeNumberCanBeInput"
    | "error.input.cannotInputANumber"
    | "workingPlane.alignToPlane"
    | "workingPlane.set";
