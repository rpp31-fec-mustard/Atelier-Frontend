import React from 'react';
import ReactDOM from 'react-dom';

const Thumbnail = ({photo, counter, handleThumbnailClick, altText}) => (
  <React.Fragment>
    <div className='thumbnail_frame_po' >
      <img className='thumbnail_box_po'
        src={photo}
        alt={`${altText} ${counter}`}
        onClick={ () => { handleThumbnailClick(counter); }}/>
    </div>
  </React.Fragment>
);


export default Thumbnail;