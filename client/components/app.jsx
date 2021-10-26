import React from 'react';
import TempTopBanner from './TempTopBanner.jsx'
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';

const App = () => {
  return (
    <div id="index">
      <TempTopBanner />
      <ProductOverview />
      <Related />
      <QA/>
      <Reviews />
    </div>
  );
};

export default App;