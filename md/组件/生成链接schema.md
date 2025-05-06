## 标题
生成链接 schema

## 描述

名称： 链接生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“链接生成schema”，你将识别到需要调用增加链接的API，参数componentName为a，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.link.create",
    "description": "链接组件生成schema",
    "params": {
      "componentName": "a",
      "children": "链接",
      "props": {
        "className": "component-base-style"
      },
      "id": "35635218"
    }
  }
]
```
