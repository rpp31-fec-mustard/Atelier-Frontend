import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {
  const productCards = props.relatedProducts.map((item, i) => {
    return (
      <ProductCard
        key={item.id}
        className={item.id}
        handleStar={props.handleStar}
        id={item.id}
        image={item.thumbnailUrl}
        category={item.category}
        name={item.name}
        price={item.price}
        rating={item.rating}
      />
    );
  });

  return (
    <div id="related_products" className="related_submodule">
      <h1>RELATED PRODUCTS LIST</h1>
      <div className="prod_card_container">
        <LeftButton />
        {productCards}
        <RightButton />
      </div>
    </div>
  );
};

export default RelatedProducts;
