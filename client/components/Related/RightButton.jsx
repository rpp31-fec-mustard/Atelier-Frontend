import * as React from 'react';

const RightButton = (props) => {

  React.useEffect(() => {
    const rButton = props.outfit ?
      document.getElementsByClassName('right nav-button')[1] :
      document.getElementsByClassName('right nav-button')[0];
    if (props.cardsWrapperLength > 4) {
      rButton.style.color = 'black';
    }
  }, [props.cardsWrapperLength]);

  return (
    <React.Fragment>
      <button
        className="right nav-button"
        style={{color: 'transparent'}}
        onClick={(event) => {
          props.handleRightScroll(props.cardsWrapper);
        }}
        aria-label="Scroll right"
      >
        <i className="ri-arrow-right-circle-line"></i>
      </button>
    </React.Fragment>
  );
};

export default RightButton;