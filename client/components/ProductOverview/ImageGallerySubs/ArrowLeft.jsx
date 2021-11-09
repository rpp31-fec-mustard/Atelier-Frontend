import React from 'react';
import ReactDOM from 'react-dom';

const ArrowLeft = ({index, imageLeftClick}) => {

  let leftIcon = <i className="ri-arrow-left-s-line"></i>;

  if (index === undefined) {
    return (<div></div>);
  } else {
    return (
      <div className='arrow_po'>
        <div className='arrow_space_po'></div>
        {(() => {
          if (index > 0) {
            return <p className='arrow_left_po' onClick={imageLeftClick}>{leftIcon}</p>;
          }
        })()}
        <div className='arrow_space_po'></div>
      </div>
    );
  }
};

export default ArrowLeft;