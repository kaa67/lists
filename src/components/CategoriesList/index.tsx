import Li from "./Li";
import { Category } from "../../types";

type Props = {
  categories: Category[];
  setCategories: (hruhru: Category[]) => void;
};

function CategoriesList (props: Props) {
  const { categories, setCategories } = props;

  const deleteByIndex = (indexForDelete: number) => {
    setCategories(
      categories.filter(
        (_, index) => index !== indexForDelete
      )
    );
  };

  return (
    <ul className="list-group">
      {categories.map(
        (category, index) => (
          <Li
            index={index}
            category={category}
            deleteByIndex={deleteByIndex}
          />
        )
      )}
    </ul>
  );
}

export default CategoriesList;
