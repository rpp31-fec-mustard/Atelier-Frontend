import React from 'react';
import ImageIcon from './ImageIcon.jsx';

const ImageIconBar = ({index, indexMax, handleThumbnailClick}) => {

  let i = 0;
  let indexArr = [];

  while (i <= indexMax) { indexArr.push(i); i++; }

  return (
    <React.Fragment>
      <div className='image_icon_bar_po'>
        {
          indexArr.map((i) => {
            return ( <ImageIcon i={i} photoIndex={index}
              handleThumbnailClick={handleThumbnailClick} key={`II${i}`}/> );
          })
        }
         <p className='txt' style={{visibility:'hidden'}}>Congratulations Michael and Family!</p>
      </div>
    </React.Fragment>
  );
};

export default ImageIconBar;

