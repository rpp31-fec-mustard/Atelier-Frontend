import React from 'react';
import ActionButton from './ActionButton.jsx';

const ProductCard = (props) => {
  return (
    <div className="prod-card">
      <img src={props.image}></img>
      <div>{props.category}</div>
      <div>{props.productName}</div>
      <div>${props.price}</div>
      <div>Stars</div>
      <ActionButton action={props.action}/>
    </div>
  );
};

export default ProductCard;