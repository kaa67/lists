import { useState } from 'react';
import Navbar from './components/Navbar';
import AddCategory from './components/AddCategory';
import { Category } from './types';
import CategoriesList from './components/CategoriesList';
import { categoriesMOCK } from './mock';

const Application = () => {
  const [categories, setCategories] =
    useState<Category[]>(categoriesMOCK);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Категории</h1>

            <AddCategory />

            <CategoriesList
              categories={categories}
              setCategories={setCategories}
            />
          </div>
          <div id="itemsWrapper" className="col">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
