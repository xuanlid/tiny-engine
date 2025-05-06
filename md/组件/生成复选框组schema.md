## 标题
生成复选框组 schema

## 描述

名称： 复选框组组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“复选框组组件生成schema”，你将识别到需要调用增加复选框组的API，参数componentName为TinyCheckboxGroup，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.checkboxGroup.create",
    "description": "复选框组组件生成schema",
    "params": {
      "componentName": "TinyCheckboxGroup",
      "props": {
        "modelValue": [
          "name1",
          "name2"
        ],
        "type": "checkbox",
        "options": [
          {
            "text": "复选框1",
            "label": "name1"
          },
          {
            "text": "复选框2",
            "label": "name2"
          },
          {
            "text": "复选框3",
            "label": "name3"
          }
        ],
        "className": "component-base-style"
      },
      "children": [],
      "id": "5566965b"
    }
  }
]
```
