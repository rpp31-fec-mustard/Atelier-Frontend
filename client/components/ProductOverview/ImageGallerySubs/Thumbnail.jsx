import React from 'react';
import ReactDOM from 'react-dom';

const Thumbnail = ({photo, counter, handleThumbnailClick}) => (
  <React.Fragment>
    <div className='thumbnail_frame_po' >
      <img className='thumbnail_box_po'
        src={photo}
        alt='temp'
        onClick={ () => { handleThumbnailClick(counter); }}/>
    </div>
  </React.Fragment>
);


export default Thumbnail;