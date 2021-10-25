import React from 'react';
import ProductCard from './ProductCard.jsx';

const YourOutfit = () => {

  return (
    <div id="your_outfit" className="related_submodule">
      <h1>YOUR OUTFIT LIST</h1>
      <div className="prod_card_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );

};

export default YourOutfit;