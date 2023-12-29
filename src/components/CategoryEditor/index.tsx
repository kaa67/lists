import { useUnit } from "effector-react"
import { Button, Col, Row } from "react-bootstrap"

import { $selectedCategory, deleteCategoryEvent } from "store"
import CategoryItems from "./CategoryItems"

const CategoryEditor = () => {
  const category = useUnit($selectedCategory)
  const deleteCategory = useUnit(deleteCategoryEvent)

  if (!category) {
    return null
  }

  const onDelete = () => {
    deleteCategory(category)
  }

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-between">
          <h3>{category.title}</h3>

          <Button
            size="sm"
            onClick={onDelete}
            variant="outline-danger"
          >
            Удалить
          </Button>
        </Col>
      </Row>

      <CategoryItems />
    </>
  )
}

export default CategoryEditor
