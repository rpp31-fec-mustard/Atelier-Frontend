import React, { useState } from 'react';
import StarButton from './StarButton.jsx';
import ProductComparison from './ProductComparison.jsx';

const ProductCard = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  let actionButton;

  if (!props.outfit) {
    actionButton = <StarButton handleStar={props.handleStar}/>;
  }

  return (
    <div className={`prod-card ${props.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <div className="prod-card-wrapper">
        <a href="https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/?fullscreen" target="_blank">
          <div className="prod-card-img-wrapper">
            <img src={props.image} className="prod-card-img"></img>
          </div>
          <div>{props.category}</div>
          <div>{props.name}</div>
          <div>${props.price}</div>
          <div>{props.rating}</div>
        </a>
        <div className="prod-comparison-container">
          {isHovering && <ProductComparison />}
        </div>
      </div>
      {actionButton}
    </div>
  );
};

export default ProductCard;
