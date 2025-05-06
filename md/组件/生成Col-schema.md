## 标题
生成Col schema

## 描述

名称： Col组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“Col组件生成schema”，你将识别到需要调用增加Col的API，参数componentName为TinyCol，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.Col.create",
    "description": "Col组件生成schema",
    "params": {
      "componentName": "TinyCol",
      "props": {
        "span": 12,
        "style": {
          "height": "30px",
          "border": "1px solid #ccc"
        },
        "className": "component-base-style"
      },
      "children": [],
      "id": "c3714225"
    }
  }
]
```
