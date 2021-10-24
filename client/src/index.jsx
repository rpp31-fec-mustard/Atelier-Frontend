import React from 'react';
import ReactDOM from 'react-dom';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QA from './Q&A/QA.jsx';

const App = () => {
  return (
    <div>
      <div className='module_container_po'>
        <ProductOverview />
      </div>
      <div className='module_container'>
        <h1>RELATED ITEMS AND OUTFIT CREATION WIDGET</h1>
      </div>
      <div className='module_container'>
        <QA />
      </div>
      <div className='module_container'>
        <h1>RATINGS AND REVIEWS WIDGET</h1>
      </div>
      <div> Goodbye World! </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));