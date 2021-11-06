import React from 'react';

const RightButton = (props) => {
  return (
    <div className="rbutton-container">
      <button className="rbutton" aria-label="Right button">
        <i className="fas fa-caret-right"></i>
      </button>
    </div>
  );
};

export default RightButton;