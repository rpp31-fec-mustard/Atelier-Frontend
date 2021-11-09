import * as React from 'react';

const RightButton = (props) => {
  return (
    <div className="rbutton-container">
      <button className="rbutton" onClick={(event) => {
        const cardsWrapper = props.cardsWrapper.current;
        debugger;
        cardsWrapper.scrollBy({
          top: 0,
          left: 230,
          behavior: 'smooth'
        });
      }}>
        <i className="fas fa-caret-right"></i>
      </button>
    </div>
  );
};

export default RightButton;