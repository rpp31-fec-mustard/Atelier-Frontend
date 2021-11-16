import React from 'react';
import ReactDOM from 'react-dom';
// import FullScreenModal from './FullScreenModal.jsx';


const ArrowRight = ({index, indexMax, imageRightClick}) => {

  let rightIcon = <i className="ri-arrow-right-s-line"></i>;

  if (index === undefined) {
    return (<div></div>);
  } else {
    return (
      <div className='arrow_po'>
        <div className='arrow_space_po'>

        </div>
        {(() => {
          if (index < indexMax) {
            return <p className='arrow_right_po' onClick={imageRightClick}>{rightIcon}</p>;
          }
        })()}
        <div className='arrow_space_po'></div>
      </div>
    );
  }
};

export default ArrowRight;
