import { Category } from 'store'

export const prepare = (
  category: Category,
  newItemName: string,
): Category => {
  const items = [...category.items, newItemName]
  
  return { ...category, items }
}
