## 标题
生成分页 schema

## 描述

名称： 分页组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“分页组件生成schema”，你将识别到需要调用增加分页的API，参数componentName为TinyPager，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.pager.create",
    "description": "分页组件生成schema",
    "params": {
      "componentName": "TinyPager",
      "props": {
        "layout": "total, sizes, prev, pager, next",
        "total": 100,
        "pageSize": 10,
        "currentPage": 1,
        "className": "component-base-style"
      },
      "children": [],
      "id": "e3826424"
    }
  }
]
```
