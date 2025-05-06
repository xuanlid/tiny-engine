## 标题
生成盒子容器 schema

## 描述

名称： 盒子容器生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“盒子容器生成schema”，你将识别到需要调用增加盒子容器的API，参数componentName为div，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.div.create",
    "description": "盒子容器生成schema",
    "params": {
      "componentName": "div",
      "props": {
        "className": "component-base-style"
      },
      "children": [],
      "id": "42933243"
    }
  }
]
```
