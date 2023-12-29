import { useUnit } from "effector-react"
import { ListGroup } from 'react-bootstrap'

import { $categories } from "store"
import Item from "./Item"
import AddCategory from "./AddCategory"

const CategoriesList = () => {
  const categories = useUnit($categories)

  return (
    <ListGroup>
      <ListGroup.Item>
        <AddCategory />
      </ListGroup.Item>
      {categories.map(category => (
        <Item key={category.uid} category={category} />
      ))}
    </ListGroup>
  )
}

export default CategoriesList
