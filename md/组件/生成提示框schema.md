## 标题
生成提示框 schema

## 描述

名称： 提示框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“提示框组件生成schema”，你将识别到需要调用增加提示框的API，参数componentName为TinyPopover，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.popover.create",
    "description": "提示框组件生成schema",
    "params": {
      "componentName": "TinyPopover",
      "props": {
        "width": 200,
        "title": "弹框标题",
        "trigger": "manual",
        "modelValue": true,
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "Template",
          "props": {
            "slot": "reference"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "placeholder": "触发源"
              },
              "id": "445426b4"
            }
          ],
          "id": "4d366364"
        },
        {
          "componentName": "Template",
          "props": {
            "slot": "default"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "placeholder": "提示内容"
              },
              "id": "43513145"
            }
          ],
          "id": "35525524"
        }
      ],
      "id": "5e452226"
    }
  }
]
```
