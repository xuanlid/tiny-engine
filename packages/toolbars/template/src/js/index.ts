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

/* metaService: engine.toolbars.template.js-index */

import { isDevelopEnv } from '@opentiny/tiny-engine-common/js/environments'

export const goTemplate = async (type: string) => {
  const href = window.location.href.split('?')[0] || './'
  const defaultTemplateUrl = isDevelopEnv ? `./template.html` : `${href.endsWith('/') ? href : `${href}/`}index`

  const query = `type=${type}`

  const openUrl = `${defaultTemplateUrl}?${query}`

  window.open(openUrl, '_blank')
}
