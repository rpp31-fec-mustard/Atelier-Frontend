import React from 'react';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const Related = (props) => {

  return (
    <div id="related_main" className="module_container">
      <RelatedProducts />
      <YourOutfit />
    </div>
  );

};

export default Related;