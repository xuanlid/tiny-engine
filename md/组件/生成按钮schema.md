## 标题
生成按钮 schema

## 描述

名称： 按钮组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“生成名称为“了解详情”的圆形按钮schema”，你将识别到需要调用增加按钮的API，参数componentName为TinyButton，参数circle为true，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.button.create",
    "description": "按钮组件生成schema",
    "params": {
      "componentName": "TinyButton",
      "props": {
        "text": "了解详情",
        "className": "component-base-style",
        "circle": true
      },
      "children": [],
      "id": "22233665"
    }
  }
]
```
