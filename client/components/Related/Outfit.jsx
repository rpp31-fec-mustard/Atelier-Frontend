import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const Outfit = (props) => {
  let outfitProducts;

  if (props.outfitList.length) {
    outfitProducts = props.outfitList.map((item) => {
      return (
        <ProductCard
          key={item.id}
          className={item.id}
          handleX={props.handleX}
          productId={item.id}
          image={item.thumbnailUrl}
          category={item.category}
          name={item.name}
          price={item.price}
          rating={item.rating}
          outfit={true}
        />
      );
    });
  } else {
    outfitProducts = <div className="add-product">Add a product here<br></br><i className="fas fa-plus"></i></div>;
  }

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