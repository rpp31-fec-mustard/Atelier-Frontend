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
    <div id="your-outfit" className="related-submodule">
      <h3>YOUR OUTFIT</h3>
      <div className="prod-card-container">
        <LeftButton />
        {outfitProducts}
        <RightButton />
      </div>
    </div>
  );

};

export default Outfit;