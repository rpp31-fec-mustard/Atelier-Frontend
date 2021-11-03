import React from 'react';

const Price = (props) => {
  if (props.salePrice) {
    return (
      <div className="prod-card-info sale">
        ${props.salePrice}
        <span>${props.originalPrice}</span>
      </div>
    );
  } else {
    return (
      <div className="prod-card-info price">${props.originalPrice}</div>
    );
  }
};

export default Price;