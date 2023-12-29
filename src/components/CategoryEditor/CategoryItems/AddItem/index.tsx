import { useState, ChangeEvent } from 'react'
import { useUnit } from 'effector-react'
import { Button, Form } from 'react-bootstrap'

import { $selectedCategory, updateCategoryEvent } from 'store'
import { prepare } from './utils'

const AddItem = () => {
  const [name, setName] = useState('')
  const category = useUnit($selectedCategory)
  const updateCategory = useUnit(updateCategoryEvent)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    setName(name)
  }

  const onClick = () => {
    if (category) {
      const preparedCategory = prepare(category, name)
      updateCategory(preparedCategory)
      setName('')
    }
  }

  return (
    <div className="d-flex justify-content-between">
      <Form.Control
        size="sm"
        type="text"
        onChange={onChange}
        value={name}
        placeholder="Новая подкатегория"
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

export default AddItem
