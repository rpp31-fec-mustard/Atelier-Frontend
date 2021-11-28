import React from 'react';
import ImageIcon from './ImageIcon.jsx';

const ImageIconBar = ({index, photoIndexMax, handleThumbnailClick}) => {

  let i = 0;
  let indexArr = [];

  while (i <= photoIndexMax) { indexArr.push(i); i++; }

  return (
    <React.Fragment>
      <div className='image_icon_bar_po'>
        {
          indexArr.map((i) => {
            return ( <ImageIcon i={i} photoIndex={index}
              handleThumbnailClick={handleThumbnailClick} key={`II${i}`}/> );
          })
        }
      </div>
    </React.Fragment>
  );
};

export default ImageIconBar;

