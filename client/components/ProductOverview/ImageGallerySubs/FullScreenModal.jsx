import React, {useState, useEffect} from 'react';
import $ from 'jquery';
// import ReactDOM from 'react-dom';

import {DEBUG} from '../ProductOverview.jsx';


const FullScreenModal = ({currentStyle, productName}) => {
  const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  const [index, setIndex] = useState(0);
  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;
  mlog('FSM altText', altText);


    // .on('mousemove', function(e) {
    //   $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'});

  useEffect(() => {

    // mlog('node', document.getElementsByClassName('main_image_exp_po'));
    // mlog('node', document.getElementsByClassName('main_image_exp_po')[0]);
    document.getElementsByClassName('main_image_exp_po')[0].style.backgroundImage = `url(${photos[index].url})`;
  });


  const handleOnMouseEnter = () => {
    document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(2.5)'
  };

  const handleOnMouseLeave = () => {
    document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(1)';
  };
  // const handleOnMouseOver = () => {
  //   console.log('hover');
  //   document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(1.5)';
  // };




  return (
    <div className='fullscreen_exp_po'>
      <div className='image_mask_exp_po'
      // onMouseOver={handleOnMouseOver}
      >
        <div className='main_image_exp_po'
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >

        </div>
        <div className='thumbnails_exp_po'>
          <p className='txt'>words and stuff</p>
        </div>
      </div>
    </div> );
};



export default FullScreenModal;