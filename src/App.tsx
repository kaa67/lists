import React from 'react';
import Navbar from './components/Navbar';
import AddCategory from './components/AddCategory';
import Reclama from './components/Reclama';

const App = () => (
  <div className="container-fluid">
    <Navbar />

    <Reclama />

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
