import { useState, ChangeEvent } from 'react';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  }

  const onClick = () => {
    alert(`Новое значение: "${categoryName}"`);
    setCategoryName('');
  }

  return (
    <div className="d-flex justify-content-between">
      <input
        type="text"
        onChange={onChange}
        value={categoryName}
        className="form-control"
      />

      <button
        onClick={onClick}
        disabled={!categoryName}
        className="btn btn-sm btn-success"
      >
        Добавить
      </button>
    </div>
  );
};

export default AddCategory;
