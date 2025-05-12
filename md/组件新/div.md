# div 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## div 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "div",
  "props": {
    "className": "component-base-style"
  },
  "children": [],
  "id": "14663322"
}
```

### 事件

盒子容器的事件，包括 onChange（值被改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "div",
  "props": {
    "className": "component-base-style",
    "onClick": {
      "type": "JSExpression",
      "value": "this.onClickNew"
    }
  },
  "children": [],
  "id": "14663322"
}
```