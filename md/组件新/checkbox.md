# TinyVue checkout 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## checkout 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style"
  },
  "children": [],
  "id": "e4636442"
}
```

### 禁用

可通过 disabled 属性设置复选框是否禁用。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "disabled": true
  },
  "children": [],
  "id": "e4636442"
}
```

### 勾选

可通过 checked 属性设置复选框是否勾选。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "checked": true
  },
  "children": [],
  "id": "e4636442"
}
```

### 描述文本

可通过 text 属性设置复选框的描述文本。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style"
  },
  "children": [],
  "id": "e4636442"
}
```

### 边框

可通过 border 属性设置复选框是否有边框。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "border": true
  },
  "children": [],
  "id": "e4636442"
}
```

### 状态对应的值

通过 true-label 属性设置选中的值。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "true-label": "真文本"
  },
  "children": [],
  "id": "e4636442"
}
```

通过 false-label 属性设置选中的值。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "false-label": "假文本"
  },
  "children": [],
  "id": "e4636442"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "id": "checkout"
  },
  "children": [],
  "id": "e4636442"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "ref": "checkout"
  },
  "children": [],
  "id": "e4636442"
}
```

### 事件

复选框的事件，包括 onChange（值被改变时触发）、onUpdate:modelValue（双向绑定的值改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyCheckbox",
  "props": {
    "text": "复选框文案",
    "className": "component-base-style",
    "onUpdate:modelValue": {
      "type": "JSExpression",
      "value": "this.onUpdate_modelValueNew"
    }
  },
  "children": [],
  "id": "e4636442"
}
```