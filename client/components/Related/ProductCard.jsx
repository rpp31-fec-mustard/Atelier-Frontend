import React from 'react';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';

const ProductCard = (props) => {
  let actionButton;

  if (props.action === 'star') {
    actionButton = <StarButton productId={'59553'} handleStar={props.handleStar} starred={true}/>;
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