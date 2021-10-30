import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

const Related = (props) => {
  const [productId, setProductId] = useState('59553');
  const [relatedProducts, setRelatedProducts] = useState([]);
  // [{productId, starred, category, name, price, rating}]
  const [outfitList, setOutfitList] = useState([]);
  // [{productId, category, name, price, rating}]

  useEffect(() => {
    axios.get('/related')
      .then((result) => {
        setRelatedProducts(result.data);
      })
      .catch((error) => {
        console.log({error});
      });
  }, []);

  const handleStar = (event) => {
    const target = event.target.tagName === 'I' ? event.target : event.target.firstElementChild;
    const productId = target.parentElement.parentElement.parentElement.classList[1];

    if (target.className === 'far fa-star') {
      // add to outfit list
      relatedProducts.forEach((item) => {
        const itemId = item.id.toString(10);
        if (itemId === productId) {
          setOutfitList(outfitList.concat([item]));
        }
      });
    } else {
      // remove from outfit list
      const newOutfitList = outfitList.filter((item) => {
        const itemId = item.id.toString(10);
        return itemId !== productId;
      });

      setOutfitList(newOutfitList);
    }
  };

  return (
    <div id="related_main" className="module_container">
      <RelatedProducts
        productId={productId}
        relatedProducts={relatedProducts}
        handleStar={handleStar}
      />
      <YourOutfit
        outfitList={outfitList}
      />
    </div>
  );
};

export default Related;
