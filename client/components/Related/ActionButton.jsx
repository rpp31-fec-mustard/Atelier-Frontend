import React, { useState } from 'react';

const StarButton = (props) => {
  const [starred, _updateStar] = useState(false);

  const updateStar = (event) => {
    _updateStar(!starred);
    props.handleAction(event);
  };

  let icon;

  if (starred) {
    icon = <i className="fas fa-times" aria-label="Remove product"></i>;
  } else {
    icon = <i className="fas fa-star" aria-label="Add product"></i>;
  }

  return (
    <div className="action-button-wrapper">
      <button className="action-button" onClick={updateStar}>{icon}</button>
    </div>
  );
};

export default StarButton;
