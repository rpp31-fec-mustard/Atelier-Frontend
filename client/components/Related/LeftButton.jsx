import * as React from 'react';

const LeftButton = (props) => {
  return (
    <div className="lbutton-container">
      <button className="lbutton" onClick={(event) => {
        const cardsWrapper = props.cardsWrapper.current;
        cardsWrapper.scrollBy({
          top: 0,
          left: -230,
          behavior: 'smooth'
        });
      }}>
        <i className="fas fa-caret-left"></i>
      </button>
    </div>
  );
};

export default LeftButton;