import React from 'react';
import ReactDOM from 'react-dom';

const ArrowLeft = ({photoIndex, imageLeftClick}) => {

  let leftIcon = <i className="ri-arrow-left-s-line"></i>;

  if (photoIndex === undefined || photoIndex <= 0) {
    return (<React.Fragment></React.Fragment>);
  } else {
    return (<React.Fragment>
      <p className='arrow_left_po' onClick={imageLeftClick}>{leftIcon}</p>
    </React.Fragment>);
  }
};

export default ArrowLeft;
