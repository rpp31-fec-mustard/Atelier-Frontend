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

  const [isShowing, setIsShowing] = useState(false);
//useLayoutEffect?
  useLayoutEffect(() => {
    mlog('IG useEffect to set index to 0');
    setIndex(0);
  }, [productId]);

  const handleClickImage = () => {
    setIsShowing(true);
  };

  const handleThumbnailClick = (index) => {
    console.log('htc', index);
    setIndex(index);
    // document.getElementsByClassName(`image_icon_${index}`)[0].style.backgroundColor = 'white'
  };

  // const handleIconClick = (index) => {
  //   setIndex(index);
  // };
  //needed because useEffect above is not resolved in time
  //when productId changes and new product is fetched, seems like the render below is resolved
  //before useEffect resets the index to 0.
  if (photos[index]) {
    // let node = document.getElementsByClassName('image_gallery_po').style;
    // // mlog(logC + ' node', node);

    return (
      <React.Fragment>

        <div className='image_container_po'>
          <img className='main_image_po'
            src={photos[index].url}
            alt={altText}
            data-testid='main-image' />
          <div className='image_gallery_po'>
            <ThumbnailsBar
              photos={photos}
              photoIndex={index}
              handleThumbnailClick={handleThumbnailClick}
              altText = {altText} />
            <div className='arrow_po'>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
              <ArrowLeft
                imageLeftClick={imageLeftClick}
                index={index} />
              <div className='arrow_space_po' onClick={handleClickImage}></div>
            </div>
            <div className='space01_po' onClick={handleClickImage} data-testid='click-exp-view' ></div>
            <FullScreenModal
              currentStyle={currentStyle}
              productName={productName}
              index={index}
              isShowing={isShowing}
              imageLeftClick={imageLeftClick}
              imageRightClick={imageRightClick}
              handleThumbnailClick={handleThumbnailClick}
              indexMax={photos.length - 1}
              onClose={() => setIsShowing(false)}/>
            <div className='arrow_po'>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
              <ArrowRight
                imageRightClick={imageRightClick}
                index={index}
                indexMax={photos.length - 1}/>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
            </div>
          </div>
        </div>
      </React.Fragment>
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

