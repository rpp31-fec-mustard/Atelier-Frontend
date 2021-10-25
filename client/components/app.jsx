import React from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';

const App = () => {
  return (
    <div id="index">
      <ProductOverview />
      <Related />
      <div className='module_container'>
        <h1>QUESTIONS AND ANSWERS WIDGET</h1>
      </div>
      <div className='module_container'>
        <h1>RATINGS AND REVIEWS WIDGET</h1>
      </div>
    </div>
  );
};

export default App;