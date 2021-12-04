import React from 'react';
import _, { every } from 'underscore';

const AddCartButton = ({style, addToCart, darkMode}) => {

  let darkModeClassMenu = darkMode ? 'dmSB' : '';

  if (!(_.every(style.skus, (sku) => {
    return sku.quantity === 0;
  }))) {
    return (
      <React.Fragment>
        <div className={`add_to_bag_button_po ${darkModeClassMenu}`} onClick={addToCart}>Add to Bag</div>
      </React.Fragment>
    );
  }
};

export default AddCartButton;