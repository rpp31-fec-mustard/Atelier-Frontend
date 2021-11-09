import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

const ThumbnailsBar = () => {

  let upIcon = <i className="ri-arrow-up-s-fill"></i>;
  let downIcon = <i className="ri-arrow-down-s-fill"></i>;

  return (
    <div className='thumbnails_po'>
      <div id='arrow_up_po'>{upIcon}</div>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <div id='arrow_down_po'>{downIcon}</div>
    </div>
  );
};

export default ThumbnailsBar;