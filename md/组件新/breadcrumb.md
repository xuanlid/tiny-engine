# TinyVue breadcrumb 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## breadcrumb 组件生成schema代码示例

### 基本用法

```json
{
  "componentName": "TinyBreadcrumb",
  "props": {
    "options": [
      {
        "to": "{ path: '/' }",
        "label": "首页"
      },
      {
        "to": "{ path: '/breadcrumb' }",
        "label": "产品"
      },
      {
        "replace": "true",
        "label": "软件"
      }
    ],
    "className": "component-base-style"
  },
  "children": [],
  "id": "62815232"
}
```

### 分隔符

可通过 separator 属性设置面包屑中间的分隔符。

```json
{
  "componentName": "TinyBreadcrumb",
  "props": {
    "options": [
      {
        "to": "{ path: '/' }",
        "label": "首页"
      },
      {
        "to": "{ path: '/breadcrumb' }",
        "label": "产品"
      },
      {
        "replace": "true",
        "label": "软件"
      }
    ],
    "className": "component-base-style",
    "separator": "."
  },
  "children": [],
  "id": "62815232"
}
```

### 键值

可通过 textField 属性设置面包屑的显示键值，结合options使用。

```json
{
  "componentName": "TinyBreadcrumb",
  "props": {
    "options": [
      {
        "to": "{ path: '/' }",
        "label": "首页"
      },
      {
        "to": "{ path: '/breadcrumb' }",
        "label": "产品"
      },
      {
        "replace": "true",
        "label": "软件"
      }
    ],
    "className": "component-base-style",
    "textField": "label"
  },
  "children": [],
  "id": "62815232"
}
```

### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyBreadcrumb",
  "props": {
    "options": [
      {
        "to": "{ path: '/' }",
        "label": "首页"
      },
      {
        "to": "{ path: '/breadcrumb' }",
        "label": "产品"
      },
      {
        "replace": "true",
        "label": "软件"
      }
    ],
    "className": "component-base-style",
    "id": "breadcrumb"
  },
  "children": [],
  "id": "62815232"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyBreadcrumb",
  "props": {
    "options": [
      {
        "to": "{ path: '/' }",
        "label": "首页"
      },
      {
        "to": "{ path: '/breadcrumb' }",
        "label": "产品"
      },
      {
        "replace": "true",
        "label": "软件"
      }
    ],
    "className": "component-base-style",
    "ref": "breadcrumb"
  },
  "children": [],
  "id": "62815232"
}
```

### 事件

面包屑的事件，包括 onSelect（选择 breadcrumb 时触发）、onClick（点击事件）、onChange（值被改变时触发）、onFocus（获得焦点时触发）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyBreadcrumb",
  "props": {
    "options": [
      {
        "to": "{ path: '/' }",
        "label": "首页"
      },
      {
        "to": "{ path: '/breadcrumb' }",
        "label": "产品"
      },
      {
        "replace": "true",
        "label": "软件"
      }
    ],
    "className": "component-base-style",
    "onSelect": {
      "type": "JSExpression",
      "value": "this.onSelectNew"
    }
  },
  "children": [],
  "id": "62815232"
}
```