import React, { useState } from "react";

const StarButton = (props) => {
  const [starred, _setStarred] = useState(false);
  let star;

  const setStarred = (event) => {
    props.handleStar(event);
    _setStarred(!starred);
  };

  if (starred) {
    star = <i className="fas fa-star"></i>;
  } else {
    star = <i className="far fa-star"></i>;
  }

  return (
    <div className="action_button_wrapper">
      <button onClick={setStarred}>{star}</button>
    </div>
  );
};

export default StarButton;
