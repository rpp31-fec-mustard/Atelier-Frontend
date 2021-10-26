import React from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = () => {

  return (
    <div id="related_products" className="related_submodule">
      <h1>RELATED PRODUCTS LIST</h1>
      <div className="prod_card_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );

};

export default RelatedProducts;