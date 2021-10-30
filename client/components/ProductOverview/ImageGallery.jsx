import React from 'react';
import ReactDOM from 'react-dom';
import ThumbnailsBar from './ImageGalleryDir/ThumbnailsBar.jsx'
import ArrowLeft from './ImageGalleryDir/ArrowLeft.jsx'
import ArrowRight from './ImageGalleryDir/ArrowRight.jsx'
import FullScreen from './ImageGalleryDir/FullScreen.jsx'

const ImageGallery = () => (
  <div className='image_gallery_po'>
    <ThumbnailsBar />
    <ArrowLeft />

    <div className='space01_po'>Image Gallery</div>

    <ArrowRight />

  </div>


);

export default ImageGallery;