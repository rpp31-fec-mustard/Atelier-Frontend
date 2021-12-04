/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ThumbnailsBar from './ImageGallerySubs/ThumbnailsBar.jsx';
import ArrowLeft from './ImageGallerySubs/ArrowLeft.jsx';
import ArrowRight from './ImageGallerySubs/ArrowRight.jsx';
import FullScreenModal from './ImageGallerySubs/FullScreenModal.jsx';


const ImageGallery = ({currentStyle, productId, productName, ...rest}) => {

  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;

  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoIndexMax, setPhotoIndexMax] = useState(0);



  //code to scroll thumbnails bar
  const cW2 = React.useRef(null); //testing

  const scrollThumbnailsToCurrent = () => {
    let currentTop = document.getElementById('tb_po').scrollTop;
    let selectedTop = 60 * photoIndex;
    cW2.current.scrollBy({top: selectedTop - currentTop - 180, behavior: 'smooth'});
  };

  const imageLeftClick = () => {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
    scrollThumbnailsToCurrent();

  };

  const imageRightClick = () => {
    if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
    scrollThumbnailsToCurrent(); //good for incremental scroll
  };




  const [isShowing, setIsShowing] = useState(false);

  useLayoutEffect(() => {
    setPhotoIndex(0);
  }, [productId]);

  const handleClickImage = () => {
    setIsShowing(true);
  };

  const handleThumbnailClick = (iconId) => {
    setPhotoIndex(iconId);
  };

  const resizeUrl2 = (url, pixelWidth) => {
    let resultUrl = '';
    resultUrl = url.slice(0, (url.lastIndexOf('auto=format'))) + pixelWidth;
    return resultUrl;
  };
  // fm=jpg&w=200&fit=max


  //needed because useEffect above is not resolved in time
  //when productId changes and new product is fetched, seems like the render below is resolved
  //before useEffect resets the index to 0.
  if (photos[photoIndex]) {

    return (
      <React.Fragment>
        <div className='image_container_po'>
          <img className='main_image_po'
            src={resizeUrl2(photos[photoIndex].url, 'auto=format&w=1000&h=1000&fit=clip=q=80')}
            alt={altText}
            data-testid='main-image' />
          <div className='image_gallery_po'>
            <ThumbnailsBar
              photos={photos}
              photoIndex={photoIndex}
              handleThumbnailClick={handleThumbnailClick}
              altText = {altText}
              cW2={cW2}
              {...rest}
            />
            <div className='arrow_po'>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
              <ArrowLeft
                imageLeftClick={imageLeftClick}
                photoIndex={photoIndex} />
              <div className='arrow_space_po' onClick={handleClickImage}></div>
            </div>
            <div className='space01_po' onClick={handleClickImage} data-testid='click-exp-view' ></div>
            <FullScreenModal
              currentStyle={currentStyle}
              productName={productName}
              photoIndex={photoIndex}
              isShowing={isShowing}
              imageLeftClick={imageLeftClick}
              imageRightClick={imageRightClick}
              handleThumbnailClick={handleThumbnailClick}
              photoIndexMax={photos.length - 1}
              onClose={() => setIsShowing(false)}/>
            <div className='arrow_po'>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
              <ArrowRight
                imageRightClick={imageRightClick}
                photoIndex={photoIndex}
                photoIndexMax={photos.length - 1}/>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    //needed to set index to 0 if this conditional
    setPhotoIndex(0);
    return (
      <div>image gallery did not render</div>
    );
  }
};

export default ImageGallery;
