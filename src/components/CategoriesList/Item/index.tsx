import { ChangeEvent } from "react"
import { useUnit } from "effector-react"
import { Badge, Button, Form, ListGroup } from 'react-bootstrap'

import { $categoryUid, deleteCategoryEvent, setCategoryUidEvent, updateCategoryEvent } from "store"
import { Category } from "store/types"

type Props = {
  category: Category
}

function Item ({ category }: Props) {
  const categoryUid = useUnit($categoryUid)
  const setCategoryUid = useUnit(setCategoryUidEvent)
  const updateCategory = useUnit(updateCategoryEvent)
  const deleteCategory = useUnit(deleteCategoryEvent)
  const isActive = category.uid === categoryUid

  const onSelect = () => {
    setCategoryUid(category.uid)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    updateCategory({
      ...category,
      title: name
    })
  }

  const onDelete = () => {
    deleteCategory(category)
  }

  return (
    <ListGroup.Item
      action
      active={isActive}
      onClick={onSelect}
      className="d-flex justify-content-between"
    >
      {isActive ? (
        <Form.Control
          size="sm"
          type="text"
          onChange={onChange}
          value={category.title}
          placeholder="Новая категория"
        />
      ) : (
        <>
          {category.title}

          <Badge bg="primary" pill>
            {category.items.length}
          </Badge>
        </>
      )}
    </ListGroup.Item>
  )
}

export default Item
