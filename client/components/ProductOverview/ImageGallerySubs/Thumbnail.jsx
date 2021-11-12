import React from 'react';
import ReactDOM from 'react-dom';

const Thumbnail = ({photo}) => (
  <React.Fragment>
    <div className='thumbnail_frame_po' >
      <img className='thumbnail_box_po' src={photo} alt='temp'/>
    </div>
  </React.Fragment>
);


export default Thumbnail;