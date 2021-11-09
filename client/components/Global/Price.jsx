import React from 'react';

const Price = (props) => {
  if (props.salePrice) {
    return (
      <div className="sale-price">
        ${props.salePrice}
        <span>${props.originalPrice}</span>
      </div>
    );
  } else {
    return (
      <div className="original-price">${props.originalPrice}</div>
    );
  }
};

export default Price;