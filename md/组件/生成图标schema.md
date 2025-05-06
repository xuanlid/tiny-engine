## 标题
生成图标 schema

## 描述

名称： 图标生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API，相关图标名称可以在icon知识库中查找

## 示例

例如，当用户输入“生成“向右”图标的schema”，你将识别到需要调用增加图标的API，参数componentName为Icon，props中的参数name可以在对应的icon知识库中查找名称，即“向右”返回“IconChevronRight”，参数name为“IconChevronRight”，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.input.create",
    "description": "图标生成schema",
    "params": {
      "componentName": "Icon",
      "props": {
        "name": "IconChevronRight",
        "className": "component-base-style"
      },
      "children": [],
      "id": "5546423a"
    }
  }
]
```
