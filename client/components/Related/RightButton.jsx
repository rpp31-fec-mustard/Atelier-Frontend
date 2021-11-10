import * as React from 'react';

const RightButton = (props) => {
  const rButton = React.useRef(null);

  return (
    <React.Fragment>
      <button className="nav-button" onClick={(event) => {

        props.handleRightScroll(event);
        // const cardsWrapper = props.cardsWrapper.current;
        // // debugger;
        // cardsWrapper.scrollBy({
        //   top: 0,
        //   left: 230,
        //   behavior: 'smooth'
        // });

        // const wrapperScrollPosition = Math.ceil(cardsWrapper.scrollLeft);
        // const wrapperMaxScrollPosition = cardsWrapper.scrollWidth - cardsWrapper.clientWidth;

        // // only show right button if there are more than 4 products and you haven't reached the end of the scroll
        // if (wrapperScrollPosition === wrapperMaxScrollPosition) {
        //   rButton.current.style.color = 'rgb(0, 0, 0, 0)';
        // } else {
        //   rButton.current.style.color = 'black';
        // }

      // console.log('Right:', Math.ceil(cardsWrapper.scrollLeft), cardsWrapper.scrollWidth - cardsWrapper.clientWidth);
      }}>
        <i className="ri-arrow-right-circle-line"></i>
      </button>
    </React.Fragment>
  );
};

export default RightButton;