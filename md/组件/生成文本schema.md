## 标题
生成文本 schema

## 描述

名称： 文本生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“生成文本内容为“技术即服务，让创新触手可及”，颜色为“#f00f0f”的schema”，你将识别到需要调用增加文本的API，参数componentName为Text，props中的参数text为“技术即服务，让创新触手可及”，style为“display: inline-block; color: #f00f0f;”，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.text.create",
    "description": "盒子容器生成schema",
    "params": {
      "componentName": "Text",
      "props": {
        "style": "display: inline-block; color: #f00f0f;",
        "text": "技术即服务，让创新触手可及",
        "className": "component-base-style"
      },
      "children": [],
      "id": "d3365475"
    }
  }
]
```
