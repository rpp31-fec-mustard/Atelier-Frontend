import React from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import Reviews from './Reviews/Reviews.jsx';

const App = () => {
  return (
    <div id="index">
      <ProductOverview />
      <Related />
      <div className='module_container'>
        <h1>QUESTIONS AND ANSWERS WIDGET</h1>
      </div>
     <Reviews />
    </div>
  );
};

export default App;