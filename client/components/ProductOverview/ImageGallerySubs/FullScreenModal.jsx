import React, {useState, useEffect, useLayoutEffect} from 'react';
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
// import ReactDOM from 'react-dom';

import {DEBUG} from '../ProductOverview.jsx';


const FullScreenModal = ({currentStyle, productName, index, show, onClose}) => {
  // const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';


  if (!show) {
    return null;
  }

  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;
  mlog('FSM altText', altText);

  const [zoom, setZoom] = useState(false);
  const [panImage, setPanImage] = useState(false);

  useEffect(() => {
    let image = document.getElementsByClassName('inner_image_exp_po')[0];
    if (zoom) {
      image.style.transform = 'scale(2.5)';
      image.style.cursor = 'zoom-out';
      setPanImage(true);

    } else {
      image.style.transform = 'scale(1)';
      image.style.cursor = 'zoom-in';
      setPanImage(false);
    }
  }, [zoom]);

  const onClickZoomImage = (e) => {
    zoom ? setZoom(false) : setZoom(true);
    let image = document.getElementsByClassName('inner_image_exp_po')[0];
    image.style.transformOrigin = ((e.pageX - image.offsetLeft) / image.offsetWidth) * 100 + '% ' +
    ((e.pageY - image.offsetTop) / image.offsetHeight) * 100 + '% ';
  }

  const moveMousePanImage = (e) => {
    let image = document.getElementsByClassName('inner_image_exp_po')[0];
    // console.log(e.pageX, e.pageY);
    if (panImage) {
      image.style.transformOrigin = ((e.pageX - image.offsetLeft) / image.offsetWidth) * 100 + '% ' +
        ((e.pageY - image.offsetTop) / image.offsetHeight) * 100 + '% ';
    }
  };

  //

  return (
    <div className='fullscreen_exp_po'
    >
      <div className='image_side_po'
        onClick={onClose}
      >side</div>
      <div className='main_image_exp_po'>
        <img className='inner_image_exp_po' src={photos[index].url}
          onClick={onClickZoomImage}
          onMouseMove={moveMousePanImage}
        />
      </div>
      <div className='image_side_po'
        onClick={onClose}
      >side</div>
      <div className='thumbnails_exp_po'>
        <p className='txt'>Congratulations Michael and Family!</p>
      </div>
    </div> );
};

export default FullScreenModal;
