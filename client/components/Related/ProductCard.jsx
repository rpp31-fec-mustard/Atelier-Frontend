import React from 'react';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';

const ProductCard = (props) => {
  let actionButton;

  if (props.action === 'star') {
    actionButton = <StarButton />;
  } else {
    actionButton = <XButton />;
  }
  return (
    <div className="prod-card">
      <img src={props.image}></img>
      <div>{props.category}</div>
      <div>{props.productName}</div>
      <div>${props.price}</div>
      <div>Stars</div>
      {actionButton}
    </div>
  );
};

export default ProductCard;