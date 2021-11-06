import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from './FullScreen.jsx';


const ArrowRight = ({index, indexMax, imageRightClick}) => {

  if (index === undefined) {
    return (<div></div>);
  } else {
    return (
      <div className='arrow_po'>
        <div className='arrow_space_po'>
          <FullScreen />
        </div>
        {(() => {
          if (index < indexMax) {
            return <p className='arrow_right_po' onClick={imageRightClick}>R</p>;
          }
        })()}
        <div className='arrow_space_po'></div>
      </div>
    );
  }
};

export default ArrowRight;
