import React, { useState } from 'react';
import ActionButton from './ActionButton.jsx';
import ProductComparison from './Comparison.jsx';
import Price from '../Global/Price.jsx';
import Stars from '../Global/Stars.jsx';

const ProductCard = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // setting action button only for related product cards
  let actionButton;

  if (!props.outfit) {
    actionButton = <ActionButton handleAction={props.handleAction} />;
  }

  // setting image in cases of null image
  let image = props.product.thumbnailUrl ? (
    <img src={props.product.thumbnailUrl} className="prod-card-img"></img>
  ) : (
    <div className="prod-card-no-img">No image</div>
  );

  return (
    <div
      className={`prod-card ${props.product.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <div className="prod-card-wrapper">
        <a
          href="https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/?fullscreen"
          target="_blank"
        >
          <div className="prod-card-img-wrapper">{image}</div>
          <div className="prod-card-info category">{props.product.category}</div>
          <div className="prod-card-info name">{props.product.name}</div>
          <Price originalPrice={props.product.originalPrice} salePrice={props.product.salePrice}/>
          <div className="prod-card-info rating"><Stars productId={props.product.id}/></div>
        </a>
        <div className="prod-comparison-container">
          {isHovering && <ProductComparison currentProduct={props.product}/>}
        </div>
      </div>
      {actionButton}
    </div>
  );
};

export default ProductCard;
