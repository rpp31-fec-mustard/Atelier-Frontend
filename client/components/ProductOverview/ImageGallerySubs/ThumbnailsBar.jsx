import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

const ThumbnailsBar = ({photos, handleThumbnailClick}) => {
  // console.log('TB photos:', photos);
  let upIcon = <i className="ri-arrow-up-s-fill"></i>;
  let downIcon = <i className="ri-arrow-down-s-fill"></i>;
  let counter = -1;

  return (
    <div className='thumbnails_po'>
      <div id='arrow_up_po'>{upIcon}</div>
      {
        photos.map((photo) => {
          counter++;
          return ( <Thumbnail
            photo={photo.url}
            counter={counter}
            handleThumbnailClick={handleThumbnailClick}/> );
        })
      }
      <div id='arrow_down_po'>{downIcon}</div>
    </div>
  );
};

export default ThumbnailsBar;