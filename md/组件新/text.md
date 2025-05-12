# text 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## text 组件生成schema代码示例

### 基本用法

可通过 text 属性设置要展示的文本内容

```json
{
  "componentName": "Text",
  "props": {
    "style": "display: inline-block;",
    "text": "TinyEngine 前端可视化设计器，为设计器开发者提供定制服务，在线构建出自己专属的设计器。",
    "className": "component-base-style"
  },
  "children": [],
  "id": "42896228"
}
```


### 设置样式

通过对应的 style 属性，可以设置需要的样式。

```json
{
  "componentName": "Text",
  "props": {
    "style": "display: inline-block; color: #f0f00f;",
    "text": "TinyEngine 前端可视化设计器，为设计器开发者提供定制服务，在线构建出自己专属的设计器。",
    "className": "component-base-style"
  },
  "children": [],
  "id": "42896228"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "Text",
  "props": {
    "text": "TinyEngine 前端可视化设计器，为设计器开发者提供定制服务，在线构建出自己专属的设计器。",
    "className": "component-base-style",
    "id": "text"
  },
  "children": [],
  "id": "42896228"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "Text",
  "props": {
    "text": "TinyEngine 前端可视化设计器，为设计器开发者提供定制服务，在线构建出自己专属的设计器。",
    "className": "component-base-style",
    "ref": "text"
  },
  "children": [],
  "id": "42896228"
}
```

### 设置文本值

通过配置对应的 text 属性，text中的value是设置文本值，取this.state下对应的参数值。

```json
{
  "componentName": "Text",
  "props": {
    "style": "display: inline-block;",
    "text": {
      "type": "JSExpression",
      "value": "this.state.inputData"
    },
    "className": "component-base-style"
  },
  "children": [],
  "id": "6263161c"
}
```

### 事件

文本的事件，包括 onChange（值被改变时触发）、onFocus（获得焦点时触发）、onClick（点击事件）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "Text",
  "props": {
    "style": "display: inline-block;",
    "text": "TinyEngine 前端可视化设计器，为设计器开发者提供定制服务，在线构建出自己专属的设计器。",
    "className": "component-base-style",
    "onClick": {
      "type": "JSExpression",
      "value": "this.onClickNew"
    }
  },
  "children": [],
  "id": "32285443"
}
```
 