import { useState, ChangeEvent } from 'react'
import { useUnit } from 'effector-react'
import { Button, Form } from 'react-bootstrap'

import { addCategoryEvent } from 'store'
import { createNewCategory } from './utils'

const AddCategory = () => {
  const [name, setName] = useState('')
  const addCategory = useUnit(addCategoryEvent)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    setName(name)
  }

  const onClick = () => {
    const newCategory = createNewCategory(name)
    addCategory(newCategory)
    setName('')
  }

  return (
    <div className="d-flex justify-content-between">
      <Form.Control
        size="sm"
        type="text"
        onChange={onChange}
        value={name}
        placeholder="Новая категория"
      />

      <Button
        onClick={onClick}
        disabled={!name}
        className="btn btn-sm btn-success"
      >
        Добавить
      </Button>
    </div>
  )
}

export default AddCategory
