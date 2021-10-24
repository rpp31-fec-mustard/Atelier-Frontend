import React from 'react';
import ReactDOM from 'react-dom';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';

const App = () => {
  return (
    <div id="index">
      <div className='module_container_po'>
        <ProductOverview />
      </div>
      <div className='module_container'>
        <Related />
      </div>
      <div className='module_container'>
        <h1>QUESTIONS AND ANSWERS WIDGET</h1>
      </div>
      <div className='module_container'>
        <h1>RATINGS AND REVIEWS WIDGET</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));