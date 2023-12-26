import { ReactNode } from "react";

import Ul from "./Ul";
import Li from "./Li";

import { Category } from "../../types";

type Props = {
  categories: Category[];
  setCategories: (hruhru: Category[]) => void;
};

function CategoriesList (props: Props) {
  const { categories, setCategories } = props;

  const deleteByIndex = (indexForDelete: number) => {
    const newCategories =categories.filter(
      (_, index) => index !== indexForDelete
    );
    
    setCategories(newCategories);
  };

  // OldStyle for old guys
  //
  const liList: ReactNode[] = [];
  categories.forEach((category, index) => {
    liList.push(
      <Li key={index}
        index={index}
        category={category}
        deleteByIndex={deleteByIndex}
      />
    );
  });

  // New style for yung champions based on MAP method
  //
  // const liList = categories.map(
  //   (category, index) => (
  //     <Li key={index}
  //       index={index}
  //       category={category}
  //       deleteByIndex={deleteByIndex}
  //     />
  //   )
  // );

  return (
    <Ul>
      {liList}
    </Ul>
  );
}

export default CategoriesList;
