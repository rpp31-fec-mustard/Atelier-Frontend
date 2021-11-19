import * as React from 'react';

const ActionButton = (props) => {
  let icon;

  if (props.product.starred === true) {
    icon = <i className="ri-close-fill"></i>;
  } else {
    icon = <i className="ri-star-fill"></i>;
  }

  return (
    <div className="action-button-wrapper">
      <button className="action-button" onClick={(event) => { props.handleAction(event); }}>{icon}</button>
    </div>
  );
};

export default ActionButton;
