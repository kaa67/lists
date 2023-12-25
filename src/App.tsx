import React from 'react';
import Navbar from './components/Navbar';
import AddCategory from './components/AddCategory';

const App = () => (
  <div className="container-fluid">
    <Navbar />

    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Категории</h1>
          <AddCategory />
          <div id="categoriesWrapper"></div>
        </div>
        <div id="itemsWrapper" className="col">
        </div>
      </div>
    </div>
  </div>
);

export default App;
