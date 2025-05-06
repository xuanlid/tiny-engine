## 标题
生成复选框 schema

## 描述

名称： 复选框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“复选框组件生成schema”，你将识别到需要调用增加复选框的API，参数componentName为TinyCheckbox，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.checkbox.create",
    "description": "复选框组件生成schema",
    "params": {
      "componentName": "TinyCheckbox",
      "props": {
        "text": "复选框文案",
        "className": "component-base-style"
      },
      "children": [],
      "id": "46523476"
    }
  }
]
```
