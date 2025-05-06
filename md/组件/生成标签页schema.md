## 标题
生成标签页 schema

## 描述

名称： 标签页组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“标签页组件生成schema”，你将识别到需要调用增加标签页的API，参数componentName为TinyTabs，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.tabs.create",
    "description": "标签页组件生成schema",
    "params": {
      "componentName": "TinyTabs",
      "props": {
        "modelValue": "first",
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "TinyTabItem",
          "props": {
            "title": "标签页1",
            "name": "first"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "margin:10px 0 0 30px"
              },
              "id": "72424334"
            }
          ],
          "id": "15d55545"
        },
        {
          "componentName": "TinyTabItem",
          "props": {
            "title": "标签页2",
            "name": "second"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "margin:10px 0 0 30px"
              },
              "id": "52448932"
            }
          ],
          "id": "14626654"
        }
      ],
      "id": "85345455"
    }
  }
]
```
