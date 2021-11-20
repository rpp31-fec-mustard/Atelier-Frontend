import * as React from 'react';

const ActionButton = (props) => {
  let icon;

  if (props.product.starred === true) {
    icon = <i className="ri-close-fill" role="button" aria-label="Remove product"></i>;
  } else {
    icon = <i className="ri-star-fill" role="button" aria-label="Add product"></i>;
  }

  return (
    <div className="action-button-wrapper">
      <button
        className="action-button"
        onClick={(event) => { props.handleAction(event); }}
        aria-label="Action button"
      >
        {icon}</button>
    </div>
  );
};

export default ActionButton;
