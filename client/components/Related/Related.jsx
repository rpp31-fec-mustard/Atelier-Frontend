import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';

const Related = (props) => {
  const [productId, setProductId] = useState(props.productId);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  useEffect(() => {
    axios.post('/related', { product: props.productId })
      .then((result) => {
        setRelatedProducts(result.data);
      })
      .catch((error) => {
        console.log('Client unable to get related products: ', error);
      });
  }, [props.productId]);

  const handleAction = (event) => {
    const target = event.target.tagName === 'I' ? event.target : event.target.firstElementChild;
    const productId = target.parentElement.parentElement.parentElement.classList[1];

    if (target.className === 'fas fa-star') {
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
    <div id="related-main" className="module_container">
      <RelatedProducts
        productId={productId}
        relatedProducts={relatedProducts}
        handleAction={handleAction}
        homeProduct={props.homeProduct}
      />
      <Outfit
        outfitList={outfitList}
      />
    </div>
  );
};

export default Related;
