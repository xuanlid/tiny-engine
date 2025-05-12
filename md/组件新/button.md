# TinyVue button 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## button 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style"
  },
  "children": [],
  "id": "84331435"
}
```

### 按钮类型

通过 type 设置按钮类型，可以设置为对应的类型。可选值为 primary、success、info、warning、danger和 text。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "type": "primary"
  },
  "children": [],
  "id": "84331435"
}
```

### 禁用

可通过 disabled 属性设置按钮是否禁用。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "disabled": true
  },
  "children": [],
  "id": "84331435"
}
```

### 尺寸

可通过 size 属性设置尺寸大小，可选值：large / medium / small / mini。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "size": "large"
  },
  "children": [],
  "id": "84331435"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "id": "button"
  },
  "children": [],
  "id": "84331435"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "ref": "button"
  },
  "children": [],
  "id": "84331435"
}
```

### 设置圆角

可通过 round 属性设置按钮是否圆角。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "round": true
  },
  "children": [],
  "id": "84331435"
}
```

### 设置朴素按钮

可通过 plain 属性设置按钮是否为朴素按钮。

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "plain": true
  },
  "children": [],
  "id": "84331435"
}
```

### 设置禁用时间

可通过 reset-time 属性设置按钮禁用时间。可防止重复提交，单位毫秒

```json
{
  "componentName": "TinyButton",
  "props": {
    "text": "按钮文案",
    "className": "component-base-style",
    "reset-time": 4
  },
  "children": [],
  "id": "84331435"
}
```

### 设置圆形按钮

可通过 circle 属性设置是否为圆形按钮。

```json
{
      "componentName": "TinyButton",
      "props": {
        "text": "按钮文案",
        "className": "component-base-style",
        "circle": true
      },
      "children": [],
      "id": "84331435"
    }
```

### 设置自动聚焦

可通过 autofocus 属性设置是否自动聚焦。

```json
{
      "componentName": "TinyButton",
      "props": {
        "text": "按钮文案",
        "className": "component-base-style",
        "autofocus": true
      },
      "children": [],
      "id": "84331435"
    }
```

### 设置加载中

可通过 loading 属性设置是否加载中样式。

```json
{
      "componentName": "TinyButton",
      "props": {
        "text": "按钮文案",
        "className": "component-base-style",
        "loading": true
      },
      "children": [],
      "id": "84331435"
    }
```

### 事件

按钮的事件，包括 onChange（值被改变时触发）、onInput（输入值改变时触发）、onUpdate:modelValue（双向绑定的值改变时触发）、onBlur（失去焦点时触发）、onFocus（获得焦点时触发）、onClear（点击清空按钮时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

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