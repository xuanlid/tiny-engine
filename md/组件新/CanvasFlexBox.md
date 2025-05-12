# CanvasFlexBox 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## CanvasFlexBox 组件生成schema代码示例

### 基本用法

可通过 gap 属性调整间距， padding 属性调整内间距

```json
{
  "componentName": "CanvasFlexBox",
  "props": {
    "flexDirection": "row",
    "gap": "8px",
    "padding": "8px",
    "className": "component-base-style"
  },
  "children": [],
  "id": "236d76f3"
}
```

### 排列方向

通过对应的 flexDirection 属性，可以设置为对应的水平对齐方式。默认为 row（水平,起点在左端），可选值为 row（水平,起点在左端）、row-reverse（水平,起点在右端）、 column（垂直,起点在上沿）、column-reverse（垂直,起点在下沿）。

```json
{
  "componentName": "CanvasFlexBox",
  "props": {
    "flexDirection": "row",
    "gap": "8px",
    "padding": "8px",
    "className": "component-base-style"
  },
  "children": [],
  "id": "65546816"
}
```

### 水平对齐方式

通过对应的 justifyContent 属性，可以设置为对应的水平对齐方式。默认为 flex-start（左对齐），可选值为 flex-start（左对齐）、flex-end（右对齐）、 center（居中）、space-between（两端对齐，子元素间隔相等）、space-around（子元素两侧间隔相等）。

```json
{
  "componentName": "CanvasFlexBox",
  "props": {
    "flexDirection": "row",
    "gap": "8px",
    "padding": "8px",
    "className": "component-base-style",
    "justifyContent": "space-around"
  },
  "children": [],
  "id": "65546816"
}
```

### 垂直对齐方式

通过对应的 alignItems 属性，可以设置为对应的垂直对齐方式。默认为 center（交叉轴的中点对齐），可选值为 center（交叉轴的中点对齐）、flex-start（交叉轴的起点对齐）、flex-end（交叉轴的终点对齐）、baseline（以子元素第一行文字的基线对齐）、stretch（占满容器高度）。

```json
{
  "componentName": "CanvasFlexBox",
  "props": {
    "flexDirection": "row",
    "gap": "8px",
    "padding": "8px",
    "className": "component-base-style",
    "alignItems": "stretch"
  },
  "children": [],
  "id": "65546816"
}
```

### 事件

弹性容器的事件，包括 onChange（值被改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "CanvasFlexBox",
  "props": {
    "flexDirection": "row",
    "gap": "8px",
    "padding": "8px",
    "className": "component-base-style",
    "onClick": {
      "type": "JSExpression",
      "value": "this.onClickNew"
    }
  },
  "children": [],
  "id": "236d76f3"
}
```