import React from 'react';

const StarButton = (props) => {
  let star;
  if (props.starred) {
    star = <i className="fas fa-star"></i>;
  } else {
    star = <i className="far fa-star"></i>;
  }

  return (
    <div className="action_button_wrapper">
      <button onClick={props.handleStar}>{star}</button>
    </div>
  );
};

export default StarButton;