import * as React from 'react';
import checkOutfitListPresence from '../Global/checkOutfitListPresence.jsx';

const ActionButton = (props) => {
  let icon;
  if (checkOutfitListPresence(props.product, props.outfitList)) {
    icon = <i className="ri-close-fill" role="button" aria-label="Remove product"></i>;
  } else {
    icon = <i className="ri-star-fill" role="button" aria-label="Add product"></i>;
  }

  return (
    <div className="action-button-wrapper">
      <button
        className="action-button"
        onClick={(event) => { props.handleAction(props.product); }}
        aria-label="Action button"
      >
        {icon}</button>
    </div>
  );
};

export default ActionButton;
