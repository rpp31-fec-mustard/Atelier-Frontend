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
    const targetProductId = target.parentElement.parentElement.parentElement.classList[1];

    if (target.className === 'ri-star-fill') {
      // add to outfit list
      const newRelatedProducts = relatedProducts.map((product) => {
        const productId = product.id.toString(10);
        if (productId === targetProductId) {
          product['starred'] = true;
          // TODO: check that product not already in outfit list
          setOutfitList(outfitList.concat([product]));
          return product;
        } else {
          return product;
        }
      });

      setRelatedProducts(newRelatedProducts);
    } else {
      // remove from outfit list
      const newOutfitList = outfitList.filter((product) => {
        const productId = product.id.toString(10);
        return productId !== targetProductId;
      });

      const newRelatedProducts = relatedProducts.map((product) => {
        const productId = product.id.toString(10);
        if (productId === targetProductId) {
          product['starred'] = false;
          return product;
        } else {
          return product;
        }
      });

      setOutfitList(newOutfitList);
      setRelatedProducts(newRelatedProducts);
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
        handleAction={handleAction}
      />
    </div>
  );
};

export default Related;
