import { useUnit } from "effector-react"
import { Button, ListGroup } from "react-bootstrap"

import { $selectedCategory, deleteCategoryEvent } from "store"
import AddItem from "./AddItem"

const CategoryItems = () => {
  const category = useUnit($selectedCategory)
  const updateCategory = useUnit(deleteCategoryEvent)

  const items = category?.items || []

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item
          action
          key={index}
          className="d-flex justify-content-between"
        >
          {item}

          <Button
            size="sm"
            variant="outline-danger"
          >
            Удалить
          </Button>
        </ListGroup.Item>
      ))}

      <ListGroup.Item>
        <AddItem />
      </ListGroup.Item>
    </ListGroup>
  )
}

export default CategoryItems
