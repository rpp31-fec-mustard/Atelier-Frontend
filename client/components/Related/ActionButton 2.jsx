import React from 'react';

const ActionButton = (props) => {
  if (props.action === 'x') {
    return (
      <div className="action_button_wrapper">
        <button><i className="fas fa-times"></i></button>
      </div>
    );
  } else {
    return (
      <div className="action_button_wrapper">
        <button><i className="far fa-star"></i></button>
      </div>
    );
  }
};

export default ActionButton;