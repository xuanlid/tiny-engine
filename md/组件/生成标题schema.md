## 标题
生成标题 schema

## 描述

名称： 标题生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“标题生成schema”，你将识别到需要调用增加标题的API，如果是1级标题参数componentName为h1，如果是2级标题参数componentName为h2，以此类推，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.heading.create",
    "description": "标题组件生成schema",
    "params": {
      "componentName": "h1",
      "props": {
        "className": "component-base-style"
      },
      "children": "Heading",
      "id": "45362344"
    }
  }
]
```
