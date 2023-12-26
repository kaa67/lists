import { Category } from "../../../types";

type Props = {
  index: number;
  category: Category;
  deleteByIndex: (index: number) => void;
};

function Li (props: Props) {
  const { index, category, deleteByIndex } = props;

  const onDelete = () => {
    deleteByIndex(index);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      {category.title}

      <button
        onClick={onDelete}
        className="btn btn-sm btn-danger"
      >
        Удалить
      </button>
    </li>
  );
}

export default Li;
