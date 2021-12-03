import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail.jsx';


const ThumbnailsBar = ({photos, photoIndex, handleThumbnailClick, altText, cW2, darkMode}) => {
  const DEBUG = false;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[36m';

  mlog(logC + ' TB photos:', photos);
  mlog(logC + ' TB altText:', altText);

  let upIcon = <i className="ri-arrow-up-s-fill"></i>;
  let downIcon = <i className="ri-arrow-down-s-fill"></i>;
  let counter = -1;

  // const cW2 = React.useRef(null); //testing



  const handleUpScroll = () => {
    cW2.current.scrollBy({top: -180, behavior: 'smooth'});
  };

  const handleDownScroll = () => {
    cW2.current.scrollBy({top: 180, behavior: 'smooth'});
  };

  let darkModeClassTNB = darkMode ? 'dmTNB' : '';

  return (
    <React.Fragment>
      <div className={`thumbnails_bar_po ${darkModeClassTNB}`}>
        <div id='arrow_up_po' onClick={() => { handleUpScroll(); }}>{upIcon}</div>
        <div className='thumbnails_po' id='tb_po' ref={cW2}>
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
        <div id='arrow_down_po' onClick={() => { handleDownScroll(); }}>{downIcon}</div>
      </div>
    </React.Fragment>
  );
};

export default ThumbnailsBar;