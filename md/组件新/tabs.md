# TinyVue tabs 组件生成schema

componentName为渲染时候的组件名称，props为组件绑定的属性，children为子组件列表，id为可以动态生成的唯一id。

## tabs 组件生成schema代码示例

### 基本用法

可通过 modelValue 属性设置默认展示的标签页项

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 显示编辑图标

可通过 showEditIcon 属性设置是否显示编辑图标。

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "showEditIcon": true
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 标签新增

可通过 with-add 属性设置标签新增。

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "with-add": true
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 可关闭

可通过 with-close 属性设置标签页项是否可关闭。

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "with-close": true
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 标签页样式

通过对应的 tab-style 属性，可以设置为对应的标签页样式。默认为 空 ，可选值为 card、border-card 和清空所选值。

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "tab-style": "card"
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```


### id属性

通过对应的 id 属性，可以设置元素id值。

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "id": "tabs"
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 设置ref

通过对应的 ref 属性，可以设置需要的ref引用类名。

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "ref": "tabs"
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 新增标签页

通过对应的 children 属性，在 children 下新增一个子组件 TinyTabItem

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "45322652"
        }
      ],
      "id": "52142715"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "14482342"
        }
      ],
      "id": "22154562"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "选项卡",
        "name": "523615a8"
      },
      "children": [
        {
          "componentName": "div",
          "id": "3643256e"
        }
      ],
      "id": "134186f4"
    }
  ],
  "id": "53614452"
}
```

### 事件

标签页的事件，包括 onClick（点击事件）、onEdit（点击新增按钮或关闭按钮或者编辑按钮后触发）、onClose（关闭页签时触发）、onChange（值被改变时触发）、onFocus（获得焦点时触发）、onMousemove（鼠标移动时触发），添加对应的事件类型为当前属性，value值绑定事件名，取对应的参数值

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style",
    "onClick": {
      "type": "JSExpression",
      "value": "this.onClickNew"
    }
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

### 设置TinyTabItem对应的属性

componentName 为 TinyTabItem 的组件， 通过对应的 title 属性，可以设置标题。 通过对应的 name 属性，可以设置唯一标识

```json
{
  "componentName": "TinyTabs",
  "props": {
    "modelValue": "first",
    "className": "component-base-style"
  },
  "children": [
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页1",
        "name": "first"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "216721a4"
        }
      ],
      "id": "15556232"
    },
    {
      "componentName": "TinyTabItem",
      "props": {
        "title": "标签页2",
        "name": "second"
      },
      "children": [
        {
          "componentName": "div",
          "props": {
            "style": "margin:10px 0 0 30px"
          },
          "id": "69a8d345"
        }
      ],
      "id": "fe4d3436"
    }
  ],
  "id": "45153634"
}
```

