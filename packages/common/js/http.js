/**
 * Copyright (c) 2023 - present TinyEngine Authors.
 * Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { isVsCodeEnv } from './environments'
import { generateRouter, generatePage } from './vscodeGenerateFile'
import { usePage, useCanvas, useNotify, useBreadcrumb } from '@opentiny/tiny-engine-meta-register'
import { getMetaApi, META_SERVICE } from '@opentiny/tiny-engine-meta-register'

/**
 * 异常情况埋点上传
 * @param { json } params {"event_type": design_error,"url": "elit in reprehenderit enim incididunt" }
 * @returns { Promise }
 */
export const requestEvent = (url, params) => {
  if (!url) {
    return
  }

  return getMetaApi(META_SERVICE.Http)
    .post(url, params)
    .catch(() => {})
}

/**
 * 页面更新
 * @param { string } pageId 页面ID
 * @param { json } params 页面信息
 * @returns { Promise }
 *
 */
export const handlePageUpdate = (pageId, params, routerChange, isCurEditPage) => {
  return getMetaApi(META_SERVICE.Http)
    .post(`/app-center/api/pages/update/${pageId}`, params)
    .then((res) => {
      const { pageSettingState } = usePage()
      const { setSaved } = useCanvas()
      if (isVsCodeEnv) {
        generatePage({
          id: pageId,
          name: params.name,
          page_content: params.page_content
        })

        if (routerChange) {
          generateRouter({
            pageId,
            componentsTree: params
          })
        }
      }

      // 更新页面管理的列表，如果不存在，说明还没有打开过页面管理面板
      pageSettingState.updateTreeData?.()
      pageSettingState.isNew = false
      useNotify({ message: '保存成功!', type: 'success' })

      // 更新 页面状态 标志
      setSaved(true)

      if (isCurEditPage) {
        const { setBreadcrumbPage } = useBreadcrumb()
        setBreadcrumbPage([params.name])
      }

      return res
    })
    .catch((err) => {
      useNotify({ title: '保存失败', message: `${err?.message || ''}`, type: 'error' })
    })
}
