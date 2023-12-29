import { v4 as generateUuid } from 'uuid'
import { Category } from 'store'

export const createNewCategory = (
  name: string,
): Category => {
  const uid = generateUuid()
  const title = name
  const items: string[] = []

  return { uid, title, items }
}