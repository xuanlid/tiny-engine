## 标题
生成走马灯 schema

## 描述

名称： 走马灯组件生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“走马灯组件生成schema”，你将识别到需要调用增加走马灯的API，参数componentName为TinyCarousel，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.carousel.create",
    "description": "走马灯组件生成schema",
    "params": {
      "componentName": "TinyCarousel",
      "props": {
        "height": "180px",
        "className": "component-base-style"
      },
      "children": [
        {
          "componentName": "TinyCarouselItem",
          "props": {
            "title": "carousel-item-a"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "margin:10px 0 0 30px"
              },
              "id": "46352113"
            }
          ],
          "id": "34523e21"
        },
        {
          "componentName": "TinyCarouselItem",
          "props": {
            "title": "carousel-item-b"
          },
          "children": [
            {
              "componentName": "div",
              "props": {
                "style": "margin:10px 0 0 30px"
              },
              "id": "1426e122"
            }
          ],
          "id": "43266553"
        }
      ],
      "id": "4825b613"
    }
  }
]
```
