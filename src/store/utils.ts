import { Category } from './types'

export const addCategoryHandle = (
  categories: Category[],
  newCategory: Category,
) =>
  [
    ...categories,
    newCategory,
  ]

export const updateCategoryHandle = (
  categories: Category[],
  updatedCategory: Category,
) =>
  categories.map(
    oldCategory => (
      oldCategory.uid === updatedCategory.uid ?
      updatedCategory :
      oldCategory
    )
  )

export const deleteCategoryHandle = (
  categories: Category[],
  deletedCategory: Category,
) =>
  categories.filter(
    category => category.uid !== deletedCategory.uid
  )

export const getSelectedCategoryHandle = (
  categories: Category[],
  uid: string,
) => {
  console.log('getSelectedCategoryHandle', categories, uid)
  return categories.find(
    currentCategory => currentCategory.uid === uid
  ) || null
}
