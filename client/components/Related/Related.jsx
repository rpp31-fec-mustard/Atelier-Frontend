import React, { useState } from 'react';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const Related = (props) => {

  const [relatedProductsList, setRelatedProductsList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  function handleStar(event) {
    // fill in star
    // update outfit list with clicked on product info
    console.log('star clicked', event.target);
  }

  return (
    <div id="related_main" className="module_container">
      <RelatedProducts handleStar={handleStar} productId={'59553'}/>
      <YourOutfit />
    </div>
  );

};

export default Related;