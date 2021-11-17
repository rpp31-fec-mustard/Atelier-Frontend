/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import ThumbnailsBar from './ImageGallerySubs/ThumbnailsBar.jsx';
import ArrowLeft from './ImageGallerySubs/ArrowLeft.jsx';
import ArrowRight from './ImageGallerySubs/ArrowRight.jsx';
import FullScreenModal from './ImageGallerySubs/FullScreenModal.jsx';
import {DEBUG} from './ProductOverview.jsx';


const ImageGallery = ({currentStyle, productId, productName}) => {
  // const DEBUG = false;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  mlog(logC + ' current style', currentStyle);
  mlog(logC + ' IG productId', productId);

  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;

  const [index, setIndex] = useState(0);
  const [indexMax, setIndexMax] = useState(0);
  const [show, setShow] = useState(false);

  const imageLeftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const imageRightClick = () => {
    if (index < photos.length - 1) {
      setIndex(index + 1);
    }
  };

//useLayoutEffect?
  useLayoutEffect(() => {
    mlog('IG useEffect to set index to 0');
    setIndex(0);
  }, [productId]);


  //needed because useEffect above is not resolved in time
  //when productId changes and new product is fetched, seems like the render below is resolved
  //before useEffect resets the index to 0.
  if (photos[index]) {
    let node = document.getElementsByClassName('image_gallery_po').style;
    mlog(logC + ' node', node);

    return (
      <div className='image_gallery_po' style={{
        color: 'red',
        backgroundImage: `url(${photos[index].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <ThumbnailsBar
          photos={photos}
          handleThumbnailClick={(index) => { setIndex(index); }}
          altText = {altText} />
        <div className='arrow_po'>
          <div className='arrow_space_po'></div>
          <ArrowLeft
            imageLeftClick={imageLeftClick}
            index={index} />
          <div className='arrow_space_po'></div>
        </div>
        <div className='space01_po'></div>
        <FullScreenModal
          currentStyle={currentStyle}
          productName={productName}
          index={index}
          show={show}
          onClose={() => setShow(false)}/>
        <div className='arrow_po'>
          <div className='arrow_space_po'>
            <button
              className='hover_fullscreen_button_po'
              onClick={() => setShow(true)}>H</button>
          </div>
          <ArrowRight
            imageRightClick={imageRightClick}
            index={index}
            indexMax={photos.length - 1}/>
          <div className='arrow_space_po'></div>
        </div>
      </div>
    );
  } else {
    //needed to set index to 0 if this conditional
    setIndex(0);
    return (
      <div>image gallery did not render</div>
    );
  }
};

export default ImageGallery;

