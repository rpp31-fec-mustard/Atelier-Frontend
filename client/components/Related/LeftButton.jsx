import * as React from 'react';

const LeftButton = (props) => {
  const lButton = React.useRef(null);

  return (
    <React.Fragment>
      <button className="nav-button" ref={lButton} onClick={(event) => {
        props.handleLeftScroll(event);
        // const cardsWrapper = props.cardsWrapper.current;
        // cardsWrapper.scrollBy({
        //   top: 0,
        //   left: -230,
        //   behavior: 'smooth'
        // });

        // const wrapperScrollPosition = Math.floor(cardsWrapper.scrollLeft);

        // if (wrapperScrollPosition > 0) {
        //   lButton.current.style.color = 'black';
        // } else {
        //   lButton.current.style.color = 'rgb(0, 0, 0, 0)';
        // }

      // console.log('Left:', Math.floor(cardsWrapper.scrollLeft));
      }}>
        <i className="ri-arrow-left-circle-line"></i>
      </button>
    </React.Fragment>
  );
};

export default LeftButton;