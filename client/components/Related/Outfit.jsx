import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const Outfit = (props) => {
  const outfitProducts = props.outfitList.map((item) => {
    return (
      <ProductCard
        key={item.id}
        className={item.id}
        handleX={props.handleX}
        id={item.id}
        image={item.thumbnailUrl}
        category={item.category}
        name={item.name}
        price={item.price}
        rating={item.rating}
        outfit={true}
      />
    );
  });

  return (
    <div id="your_outfit" className="related_submodule">
      <h1>YOUR OUTFIT LIST</h1>
      <div className="prod_card_container">
        <LeftButton />
        {outfitProducts}
        <RightButton />
      </div>
    </div>
  );

};

export default Outfit;