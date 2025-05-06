## 标题
生成单选 schema

## 描述

名称： 单选组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“单选组件生成schema”，你将识别到需要调用增加单选的API，参数componentName为TinyRadio，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.radio.create",
    "description": "单选组件生成schema",
    "params": {
      "componentName": "TinyRadio",
      "props": {
        "label": "1",
        "text": "单选文本",
        "className": "component-base-style"
      },
      "children": [],
      "id": "65232c84"
    }
  }
]
```
