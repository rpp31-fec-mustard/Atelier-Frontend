import React from 'react';
import ReactDOM from 'react-dom';

const ArrowLeft = ({index, imageLeftClick}) => {

  if (index === undefined) {
    return (<div></div>);
  } else {
    return (
      <div className='arrow_po'>
        <div className='arrow_space_po'></div>
        {(() => {
          if (index > 0) {
            return <p className='arrow_left_po' onClick={imageLeftClick}>L</p>;
          }
        })()}
        <div className='arrow_space_po'></div>
      </div>
    );
  }
};

export default ArrowLeft;