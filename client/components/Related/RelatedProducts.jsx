import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {

  return (
    <div id="related_products" className="related_submodule">
      <h1>RELATED PRODUCTS LIST</h1>
      <div className="prod_card_container">
        <LeftButton />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <RightButton />
      </div>
    </div>
  );

};

export default RelatedProducts;