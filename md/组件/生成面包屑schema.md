## 标题
生成面包屑 schema

## 描述

名称： 面包屑组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“面包屑组件生成schema”，你将识别到需要调用增加面包屑的API，参数componentName为TinyBreadcrumb，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.breadcrumb.create",
    "description": "面包屑组件生成schema",
    "params": {
      "componentName": "TinyBreadcrumb",
      "props": {
        "options": [
          {
            "to": "{ path: '/' }",
            "label": "首页"
          },
          {
            "to": "{ path: '/breadcrumb' }",
            "label": "产品"
          },
          {
            "replace": "true",
            "label": "软件"
          }
        ],
        "className": "component-base-style"
      },
      "children": [],
      "id": "222b3465"
    }
  }
]
```
