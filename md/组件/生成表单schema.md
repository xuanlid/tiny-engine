## 标题
生成表单 schema

## 描述

名称： 表单组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“表单组件生成schema”，你将识别到需要调用增加表单的API，参数componentName为TinyForm，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.form.create",
    "description": "表单组件生成schema",
    "params": {
      "componentName": "TinyForm",
      "props": {
        "labelWidth": "80px",
        "labelPosition": "top",
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "TinyFormItem",
          "props": {
            "label": "人员"
          },
          "children": [
            {
              "componentName": "TinyInput",
              "props": {
                "placeholder": "请输入",
                "modelValue": ""
              },
              "id": "55221445"
            }
          ],
          "id": "56812f23"
        },
        {
          "componentName": "TinyFormItem",
          "props": {
            "label": "密码"
          },
          "children": [
            {
              "componentName": "TinyInput",
              "props": {
                "placeholder": "请输入",
                "modelValue": "",
                "type": "password"
              },
              "id": "435b6258"
            }
          ],
          "id": "22254251"
        },
        {
          "componentName": "TinyFormItem",
          "props": {
            "label": ""
          },
          "children": [
            {
              "componentName": "TinyButton",
              "props": {
                "text": "提交",
                "type": "primary",
                "style": "margin-right: 10px"
              },
              "id": "4e224232"
            },
            {
              "componentName": "TinyButton",
              "props": {
                "text": "重置",
                "type": "primary"
              },
              "id": "36d32132"
            }
          ],
          "id": "265d7332"
        }
      ],
      "id": "34f4653e"
    }
  }
]
```
