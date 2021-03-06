import * as React from 'react';

const LeftButton = (props) => {

  return (
    <React.Fragment>
      <button
        className="left nav-button"
        style={{color: 'transparent'}}
        onClick={(event) => {
          props.handleLeftScroll(props.cardsWrapper);
        }}
        aria-label="Scroll left"
      >
        <i className="ri-arrow-left-circle-line"></i>
      </button>
    </React.Fragment>
  );
};

export default LeftButton;