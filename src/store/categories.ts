import { createEvent, createStore } from "effector"

import {
  addCategoryHandle,
  updateCategoryHandle,
  deleteCategoryHandle,
} from "./utils"
import { Category } from "./types"

export const addCategoryEvent = createEvent<Category>()
export const updateCategoryEvent = createEvent<Category>()
export const deleteCategoryEvent = createEvent<Category>()

export const setCategoryUidEvent = createEvent<string>()

export const $categories = createStore<Category[]>([])
  .on(addCategoryEvent, addCategoryHandle)
  .on(updateCategoryEvent, updateCategoryHandle)
  .on(deleteCategoryEvent, deleteCategoryHandle)

export const $categoryUid = createStore<string>('')
  .on(setCategoryUidEvent, (_, uid) => uid)
  .on(addCategoryEvent, (_, newCategory) => {
    console.log('$categoryUid', 'addCategoryEvent', newCategory)
    return newCategory.uid
  })
