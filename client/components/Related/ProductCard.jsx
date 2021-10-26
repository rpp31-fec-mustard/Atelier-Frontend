import React from 'react';
import ActionButton from './ActionButton.jsx';

const ProductCard = (props) => {
  return (
    <div className="prod-card">
      <img></img>
      <div>Category</div>
      <div>Product Name</div>
      <div>Price</div>
      <div>Stars</div>
      <ActionButton action={props.action}/>
    </div>
  );
};

export default ProductCard;