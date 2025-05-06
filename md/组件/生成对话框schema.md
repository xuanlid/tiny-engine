## 标题
生成对话框 schema

## 描述

名称： 对话框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“对话框组件生成schema”，你将识别到需要调用增加对话框的API，参数componentName为TinyDialogBox，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.dialogBox.create",
    "description": "对话框组件生成schema",
    "params": {
      "componentName": "TinyDialogBox",
      "props": {
        "visible": true,
        "show-close": true,
        "title": "dialogBox title",
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "div",
          "id": "34435665"
        }
      ],
      "id": "f2154637"
    }
  }
]
```
