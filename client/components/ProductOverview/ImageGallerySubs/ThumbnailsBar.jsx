import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

const ThumbnailsBar = ({photos, photoIndex, handleThumbnailClick, altText}) => {
  const DEBUG = false;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[36m';

  mlog(logC + ' TB photos:', photos);
  mlog(logC + ' TB altText:', altText);

  let upIcon = <i className="ri-arrow-up-s-fill"></i>;
  let downIcon = <i className="ri-arrow-down-s-fill"></i>;
  let counter = -1;

  return (
    <React.Fragment>
      <div className='thumbnails_bar_po'>
      <div id='arrow_up_po'>{upIcon}</div>
    <div className='thumbnails_po'>
      {
        photos.map((photo, index) => {
          counter++;
          mlog(logC + ' TB altText:', altText, counter);
          return ( <Thumbnail
            key={`TN${index}`}
            photo={photo.url}
            photoIndex = {photoIndex}
            counter={counter}
            altText={altText}
            handleThumbnailClick={handleThumbnailClick}/> );
          })
        }
    </div>
      <div id='arrow_down_po'>{downIcon}</div>
      </div>
        </React.Fragment>
  );
};

export default ThumbnailsBar;