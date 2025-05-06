## 标题
生成文字提示框 schema

## 描述

名称： 文字提示框组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“文字提示框组件生成schema”，你将识别到需要调用增加文字提示框的API，参数componentName为TinyTooltip，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.tooltip.create",
    "description": "文字提示框组件生成schema",
    "params": {
      "componentName": "TinyTooltip",
      "props": {
        "content": "Top Left 提示文字",
        "placement": "top-start",
        "manual": true,
        "modelValue": true,
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "span",
          "children": [
            {
              "componentName": "div",
              "props": {},
              "id": "2f242522"
            }
          ],
          "id": "349b2434"
        },
        {
          "componentName": "Template",
          "props": {
            "slot": "content"
          },
          "children": [
            {
              "componentName": "span",
              "children": [
                {
                  "componentName": "div",
                  "props": {
                    "placeholder": "提示内容"
                  },
                  "id": "6487333c"
                }
              ],
              "id": "93267434"
            }
          ],
          "id": "43815432"
        }
      ],
      "id": "c4234521"
    }
  }
]
```
