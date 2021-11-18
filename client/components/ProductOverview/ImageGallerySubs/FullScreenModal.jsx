import React, {useState, useEffect, useLayoutEffect} from 'react';
import { fromEvent } from 'rxjs';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import ImageIconBar from './ImageIconBar.jsx';

import {DEBUG} from '../ProductOverview.jsx';

const FullScreenModal = ({currentStyle, productName, index, show, onClose,
  imageLeftClick, imageRightClick, handleThumbnailClick, indexMax }) => {
  // const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  if (!show) { return null; }

  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;
  mlog('FSM altText', altText);

  const [photoIndex, setPhotoIndex] = useState(index);
  const [zoom, setZoom] = useState(false);
  const [panImage, setPanImage] = useState(false);

  useEffect(() => {
    let leftArrow = document.getElementsByClassName('a_left_po')[0];
    let rightArrow = document.getElementsByClassName('a_right_po')[0];
    let image = document.getElementsByClassName('inner_image_exp_po')[0];
    let iconsBar = document.getElementsByClassName('image_icons_exp_po')[0];

    if (zoom) {
      image.style.transform = 'scale(2.5)';
      image.style.cursor = 'zoom-out';
      leftArrow.style.visibility = 'hidden';
      rightArrow.style.visibility = 'hidden';
      iconsBar.style.visibility = 'hidden';
      setPanImage(true);

    } else {
      image.style.transform = 'scale(1)';
      image.style.cursor = 'zoom-in';
      iconsBar.style.visibility = 'visible';
      leftArrow.style.visibility = 'visible';
      rightArrow.style.visibility = 'visible';
      if (index <= 0) {
        leftArrow.style.visibility = 'hidden';
      }
      if (index >= indexMax) {
        rightArrow.style.visibility = 'hidden';
      }
      setPanImage(false);
    }
  }, [zoom, index]);


  const onClickZoomImage = (e) => {
    zoom ? setZoom(false) : setZoom(true);
    let image = document.getElementsByClassName('inner_image_exp_po')[0];
    image.style.transformOrigin = ((e.pageX - image.offsetLeft) / image.offsetWidth) * 100 + '% ' +
    ((e.pageY - image.offsetTop) / image.offsetHeight) * 100 + '% ';
  };

  const moveMousePanImage = (e) => {
    let image = document.getElementsByClassName('inner_image_exp_po')[0];
    // console.log(e.pageX, e.pageY);
    if (panImage) {
      image.style.transformOrigin = ((e.pageX - image.offsetLeft) / image.offsetWidth) * 100 + '% ' +
        ((e.pageY - image.offsetTop) / image.offsetHeight) * 100 + '% ';
    }
  };


  let leftArrowIcon = <i className="ri-arrow-left-s-line"></i>;
  let rightArrowIcon = <i className="ri-arrow-right-s-line"></i>;

  return (
    <div className='fullscreen_exp_po'>
      <div className='image_side_po' onClick={onClose}>
      </div>
      <div className='main_image_exp_po' >
        <div className='arrow_box_exp_po a_left_po' onClick={imageLeftClick}>{leftArrowIcon}</div>
        <img className='inner_image_exp_po' src={photos[index].url}
          onClick={onClickZoomImage}
          onMouseMove={moveMousePanImage} />
        <div className='arrow_box_exp_po a_right_po' onClick={imageRightClick}>{rightArrowIcon}</div>
      </div>
      <div className='image_side_po'
        onClick={onClose}>
      </div>
      <div className='image_icons_exp_po'>
        <ImageIconBar index={index} indexMax={indexMax} handleThumbnailClick={handleThumbnailClick}/>
        <p className='txt'>Congratulations Michael and Family!</p>
      </div>
    </div> );
};

export default FullScreenModal;
