import React from 'react';
import Navbar from './components/Navbar';

const App = () => (
  <div className="container-fluid">
    <Navbar />

    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Категории</h1>
          <div className="d-flex justify-content-between">
            <input className="form-control" type="text" id="newCategoryInput" />
            <button id="addCategoryBtn" className="btn btn-sm btn-success" disabled>
              Добавить
            </button>
          </div>
          <div id="categoriesWrapper"></div>
        </div>
        <div id="itemsWrapper" className="col">
        </div>
      </div>
    </div>
  </div>
);

export default App;
