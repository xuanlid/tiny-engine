## 标题
生成图片 schema

## 描述

名称： 图片生成schema
可以通过用户输入的信息，识别到需要调用生成schema的API

## 示例

例如，当用户输入“生成图片地址为“https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg” ，宽高为“100”的schema”，你将识别到需要调用增加图片的API，参数componentName为Img，参数src为“https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg”， 参数style为"height: 100px; width: 100px;"，返回如下JSON格式数组数据：

```json
[
  {
    "name": "schema.img.create",
    "description": "图片组件生成schema",
    "params": {
      "componentName": "Img",
      "props": {
        "style": "height: 100px; width: 100px;",
        "src": "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg",
        "className": "component-base-style"
      },
      "children": [],
      "id": "d2533344"
    }
  }
]
```
