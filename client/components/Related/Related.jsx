import React, { useState } from 'react';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const Related = (props) => {

  const [relatedProductsList, setRelatedProductsList] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  function handleStar(event) {
    setOutfitList([1]);
  }

  return (
    <div id="related_main" className="module_container">
      <RelatedProducts handleStar={handleStar}/>
      <YourOutfit />
    </div>
  );

};

export default Related;