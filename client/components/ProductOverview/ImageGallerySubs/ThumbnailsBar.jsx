import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

const ThumbnailsBar = () => (

  <div className='thumbnails_po'>
    <div id='arrow_up_po'>up</div>
    <Thumbnail />
    <Thumbnail />
    <Thumbnail />
    <Thumbnail />
    <Thumbnail />
    <div id='arrow_down_po'>down</div>
</div>

)

export default ThumbnailsBar;