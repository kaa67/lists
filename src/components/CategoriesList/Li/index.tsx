import { Category } from "../../../types";

type Props = {
  index: number;
  category: Category;
  deleteByIndex: (index: number) => void;
};

const liClassName = 'list-group-item d-flex justify-content-between';
const btnClassName = 'btn btn-sm btn-danger';

function Li (props: Props) {
  const { index, category, deleteByIndex } = props;

  const onDelete = () => {
    deleteByIndex(index);
  };

  return (
    <li className={liClassName}>
      {category.title}

      <button onClick={onDelete} className={btnClassName}>
        Удалить
      </button>
    </li>
  );
}

export default Li;
