// Copyright 2022-2023 the Chili authors. All rights reserved. AGPL-3.0 license.

import { Locale } from "./i18n";

export default {
    display: "简体中文",
    code: "zh-CN",
    translation: {
        "common.general": "常规",
        "common.color": "颜色",
        "common.opacity": "不透明度",
        "common.cancel": "取消",
        "common.confirm": "确定",
        "common.name": "名称",
        "common.matrix": "矩阵",
        "common.normal": "法向量",
        "common.clone": "复制对象",
        "common.length": "长度",
        "common.angle": "角度",
        "common.type": "类型",
        "common.back": "返回",
        "common.material": "材质",
        "entity.editable": "可编辑实体",
        "entity.parameter": "参数化实体",
        "home.welcome": "欢迎使用 chili3d",
        "home.recent": "最近使用",
        "ribbon.tab.file": "文件",
        "ribbon.tab.startup": "开始",
        "ribbon.tab.draw": "绘图",
        "ribbon.group.draw": "绘制",
        "ribbon.group.modify": "修改",
        "ribbon.group.converter": "转换",
        "ribbon.group.selection": "选择",
        "ribbon.group.boolean": "布尔运算",
        "ribbon.group.workingPlane": "工作平面",
        "ribbon.group.importExport": "导入/导出",
        "items.header": "项目",
        "items.tool.newFolder": "文件夹",
        "items.tool.expandAll": "展开所有",
        "items.tool.unexpandAll": "折叠所有",
        "items.tool.delete": "删除",
        "properties.header": "属性",
        "properties.multivalue": "多个值",
        "properties.group.transform": "转换",
        "material.texture": "贴图",
        "material.repeatU": "U 重复",
        "material.repeatV": "V 重复",
        "transform.translation": "位移",
        "transform.rotation": "旋转",
        "transform.scale": "缩放",
        "model.visible": "可见",
        "vertex.point": "点",
        "line.type.line": "直线",
        "line.type.xline": "构造线",
        "line.start": "起点",
        "line.end": "终点",
        "polygon.points": "点",
        "command.arc": "圆弧",
        "command.bezier": "贝塞尔",
        "command.boolean.common": "相交",
        "command.boolean.cut": "剪切",
        "command.boolean.fuse": "融合",
        "command.faceable.isFace": "面",
        "command.document.open": "打开文档",
        "command.document.save": "保存文档",
        "command.document.saveToFile": "保存到文件",
        "command.document.saveAs": "另存为",
        "command.document.new": "新建文档",
        "command.delete": "删除",
        "command.redo": "重做",
        "command.undo": "撤销",
        "command.line": "直线",
        "command.line.isConnected": "相连",
        "command.newGroup": "新建组",
        "command.newFolder": "新建文件夹",
        "command.move": "移动",
        "command.copy": "复制",
        "command.mirror": "镜像",
        "command.rotate": "旋转",
        "command.array": "阵列",
        "command.mode.repeat": "重复",
        "command.offset": "偏移",
        "command.prism": "拉伸",
        "command.revol": "旋转",
        "command.sweep": "扫略",
        "command.fuse": "合并",
        "command.toWire": "转多段线",
        "command.toFace": "转面",
        "command.import": "导入",
        "command.export.iges": "导出IGS",
        "command.export.step": "导出STP",
        "command.split": "分割",
        "command.section": "相交线",
        "snap.end": "端点",
        "snap.mid": "中点",
        "snap.center": "圆心",
        "snap.intersection": "交点",
        "snap.perpendicular": "垂点",
        "toast.command.{0}excuting": "{0}命令正在执行",
        "toast.document.saved": "文档已保存",
        "toast.document.noActived": "未打开任何文档",
        "toast.converter.invalidColor": "无效的颜色",
        "toast.converter.error": "转换错误",
        "toast.read.error": "读取错误",
        "toast.select.noSelected": "未选择任何对象",
        "toast.delete{0}Objects": "删除了 {0} 个对象",
        "toast.downloading": "正在下载",
        "toast.success": "成功",
        "toast.fail": "失败",
        "toast.excuting{0}": "正在执行{0}",
        "prompt.default": "鼠标中键平移视图，Shift + 中键旋转视图，中键滚动缩放视图",
        "prompt.polygon.close": "闭合",
        "prompt.select.models": "请选择模型",
        "prompt.select.edges": "请选择边",
        "prompt.select.faces": "请选择面",
        "prompt.select.vertexs": "请选择点",
        "prompt.select.wires": "请选择线",
        "prompt.select.shape": "选择形状",
        "prompt.select.noModelSelected": "未选择任何模型",
        "prompt.saveDocument{0}": "是否保存对 {0} 的更改？",
        "prompt.deleteDocument{0}": "是否删除 {0} ？",
        "error.default": "错误",
        "error.input.unsupportedInputs": "超过最大输入数",
        "error.input.invalidNumber": "输入错误，请输入有效的数字，以,分开",
        "error.input.threeNumberCanBeInput": "参照点为空，只能输入 3 个数",
        "error.input.cannotInputANumber": "与参照点重合，无法输入 1 个数",
        "axis.x": "X 轴",
        "axis.y": "Y 轴",
        "axis.z": "Z 轴",
        "arc.angle": "角度",
        "arc.start": "起点",
        "circle.center": "圆心",
        "circle.radius": "半径",
        "box.dx": "长",
        "box.dy": "宽",
        "box.dz": "高",
        "rect.dx": "长",
        "rect.dy": "宽",
        "body.arc": "圆弧",
        "body.bolean": "布尔",
        "body.line": "直线",
        "body.rect": "矩形",
        "body.circle": "圆形",
        "body.box": "立方体",
        "body.polygon": "多边形",
        "body.wire": "线框",
        "body.prism": "拉伸",
        "body.revol": "旋转",
        "body.sweep": "扫略",
        "body.fuse": "合并",
        "body.imported": "导入的模型",
        "body.face": "面",
        "command.box": "立方体",
        "command.circle": "圆",
        "command.rect": "矩形",
        "command.polygon": "多边形",
        "operate.pickFistPoint": "请选择第一个点, 按 ESC 键取消",
        "operate.pickNextPoint": "请选择下一个点， 按 ESC 键取消",
        "operate.pickCircleCenter": "请选择圆心  按 ESC 键取消",
        "operate.pickRadius": "请选择半径， 按 ESC 键取消",
        "workingPlane.alignToPlane": "对齐到平面",
        "workingPlane.set": "设置工作平面",
    },
} satisfies Locale;
