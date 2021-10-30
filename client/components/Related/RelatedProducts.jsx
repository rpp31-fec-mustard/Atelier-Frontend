import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {
  const productCards = props.relatedProducts.map((product, i) => {
    return (
      <ProductCard
        key={product.id}
        className={product.id}
        handleStar={props.handleStar}
        action={'star'}
        id={product.id}
        image={null}
        category={product.category}
        name={product.name}
        price={null}
        rating={product.rating}
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
