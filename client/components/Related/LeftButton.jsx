import * as React from 'react';

const LeftButton = (props) => {

  return (
    <React.Fragment>
      <button className="left nav-button" style={{color: 'white'}} onClick={(event) => {
        props.handleLeftScroll(props.cardsWrapper);
      }}>
        <i className="ri-arrow-left-circle-line"></i>
      </button>
    </React.Fragment>
  );
};

export default LeftButton;