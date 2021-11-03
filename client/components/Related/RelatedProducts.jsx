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
        handleAction={props.handleAction}
        productId={item.id}
        image={item.thumbnailUrl}
        category={item.category}
        name={item.name}
        originalPrice={item.originalPrice}
        salePrice={item.salePrice}
        rating={item.rating}
      />
    );
  });

  return (
    <div id="related-products" className="related-submodule">
      <h3>RELATED PRODUCTS</h3>
      <div className="prod-card-container">
        <LeftButton />
        {productCards}
        <RightButton />
      </div>
    </div>
  );
};

export default RelatedProducts;
