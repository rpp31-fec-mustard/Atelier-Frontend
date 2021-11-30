import React from 'react';
import ReactDOM from 'react-dom';

const ArrowRight = ({photoIndex, photoIndexMax, imageRightClick}) => {

  let rightIcon = <i className="ri-arrow-right-s-line"></i>;

  if (photoIndex === undefined || photoIndex >= photoIndexMax) {
    return (<React.Fragment></React.Fragment>);
  } else {
    return (<React.Fragment>
      <p className='arrow_right_po' onClick={imageRightClick}>{rightIcon}</p>
    </React.Fragment>);
  }
};

export default ArrowRight;
