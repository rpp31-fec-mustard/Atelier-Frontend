import * as React from 'react';

const RightButton = (props) => {
  return (
    <React.Fragment>
      <button className="right nav-button" onClick={(event) => {
        props.handleRightScroll(props.cardsWrapper);
      }}>
        <i className="ri-arrow-right-circle-line"></i>
      </button>
    </React.Fragment>
  );
};

export default RightButton;