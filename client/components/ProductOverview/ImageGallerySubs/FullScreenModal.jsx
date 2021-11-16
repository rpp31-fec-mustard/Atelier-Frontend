import React, {useState, useEffect} from 'react';
import $ from 'jquery';
// import ReactDOM from 'react-dom';

import {DEBUG} from '../ProductOverview.jsx';


const FullScreenModal = ({currentStyle, productName, index, show, onClose}) => {
  // const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';


  if (!show) {
    return null;
  }

  const [zoom, setZoom] = useState(false);
  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;
  mlog('FSM altText', altText);


  // .on('mousemove', function(e) {
  //   $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'});


  useEffect(() => {
    if (zoom) {
      document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(2.5)';
      document.getElementsByClassName('main_image_exp_po')[0].style.cursor = 'zoom-out';
    } else {
      document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(1)';
      document.getElementsByClassName('main_image_exp_po')[0].style.cursor = 'zoom-in';
    }
  }, [zoom]);


  return (
    <div className='fullscreen_exp_po'
    >
      <div className='image_side_po'
        onClick={onClose}
      >side</div>
      <div className='main_image_exp_po'>
        <img className='inner_image_exp_po' src={photos[index].url}
          onClick={() => {
            zoom ? setZoom(false) : setZoom(true);
          }}/>
      </div>
      <div className='image_side_po'
        onClick={onClose}
      >side</div>
      <div className='thumbnails_exp_po'>
        <p className='txt'>words and stuff</p>
      </div>
    </div> );
};

export default FullScreenModal;