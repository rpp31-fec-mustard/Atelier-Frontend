import * as React from 'react';

const LeftButton = (props) => {
  return (
    <div className="lbutton-container">
      <button className="lbutton" aria-label="Left button">
        <i className="fas fa-caret-left"></i>
      </button>
    </div>
  );
};

export default LeftButton;