import React, { useState } from 'react';

const StarButton = (props) => {
  const [starred, _updateStar] = useState(false);

  const updateStar = (event) => {
    _updateStar(!starred);
    props.handleStar(event);
  };

  let star;

  if (starred) {
    star = <i className="fas fa-times"></i>;
  } else {
    star = <i className="fas fa-star"></i>;
  }

  return (
    <div className="action_button_wrapper">
      <button className="star-button" onClick={updateStar}>{star}</button>
    </div>
  );
};

export default StarButton;
