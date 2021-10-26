import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const YourOutfit = (props) => {

  return (
    <div id="your_outfit" className="related_submodule">
      <h1>YOUR OUTFIT LIST</h1>
      <div className="prod_card_container">
        <LeftButton />
        <ProductCard action={'x'}/>
        <ProductCard action={'x'}/>
        <ProductCard action={'x'}/>
        <ProductCard action={'x'}/>
        <RightButton />
      </div>
    </div>
  );

};

export default YourOutfit;