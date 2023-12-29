import { combine } from 'effector'

import { $categories, $categoryUid } from 'store'
import { getSelectedCategoryHandle } from './utils'

export const $selectedCategory = combine(
  $categories,
  $categoryUid,
  getSelectedCategoryHandle
)
