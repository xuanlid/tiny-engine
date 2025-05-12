# TinyVue search 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## search 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style"
  },
  "children": [],
  "id": "56121254"
}
```

### 禁用

可通过 disabled 属性设置输入框是否禁用。

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "disabled": true
  },
  "children": [],
  "id": "56121254"
}
```

### 一键清空

可通过 clearable 属性设置输入框显示清空图标按钮

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "clearable": true
  },
  "children": [],
  "id": "56121254"
}
```

### Enter键触发

可通过 isEnterSearch 属性设置是否在按下键盘Enter键的时候触发search事件

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "isEnterSearch": true
  },
  "children": [],
  "id": "56121254"
}
```

### mini尺寸

可通过 mini 属性设置迷你模式，配置为true时，搜索默认显示为一个带图标的圆形按钮，点击后展开

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "mini": true
  },
  "children": [],
  "id": "56121254"
}
```

### 透明模式

可通过 transparent 属性设置透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景，默认 false

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "mini": true
  },
  "children": [],
  "id": "56121254"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "id": "search"
  },
  "children": [],
  "id": "56121254"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinySearch",
  "props": {
    "modelValue": "",
    "placeholder": "输入关键词",
    "className": "component-base-style",
    "ref": "search"
  },
  "children": [],
  "id": "56121254"
}
```

### 事件

搜索框的事件，包括 onChange（值被改变时触发）、onSearch（点击搜索按钮时触发）、onClick（点击事件）、onFocus（获得焦点时触发）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyInput",
  "props": {
    "placeholder": "请输入",
    "modelValue": "",
    "className": "component-base-style",
    "onUpdate:modelValue": {
      "type": "JSExpression",
      "value": "this.onUpdate_modelValueNew"
    }
  },
  "children": [],
  "id": "52259292"
}
```