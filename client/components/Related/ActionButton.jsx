import React, { useState } from 'react';

const ActionButton = (props) => {
  let icon;

  if (props.product.starred) {
    icon = <i className="ri-close-fill" aria-label="Remove product"></i>;
  } else {
    icon = <i className="ri-star-fill" aria-label="Add product"></i>;
  }

  return (
    <div className="action-button-wrapper">
      <button className="action-button" onClick={(event) => { props.handleAction(event); }}>{icon}</button>
    </div>
  );
};

export default ActionButton;
