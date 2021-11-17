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

  const [zoom, setZoom] = useState(false);
  const photos = currentStyle.photos;
  const altText = `${productName} in ${currentStyle.name }`;
  mlog('FSM altText', altText);


  // const useMousePosition = () => {
  //   const [x, setX] = useState(null);
  //   const [y, setY] = useState(null);

  //   useEffect(() => {
  //     const sub = fromEvent(document, 'mousemove')
  //       .pipe(map(event => [event.clientX, event.clientY]))
  //       .subscribe(([newX, newY]) => {
  //         setX(newX);
  //         setY(newY);
  //       });

  //     return () => {
  //       sub.unsubscribe();
  //     };
  //   }, []);
  //   return {mouseX: x, mouseY: y};
  // };

  // //throttle detection to 10x a sec
  // const sub = fromEvent(document, 'mousemove').pipe(throttleTime(100),
  //   map(event => [event.clientX, event.clientY])
  // );

  // const {mouseX, mouseY } = useMousePosition();



  // console.log(x, y);

  // console.log(mouseX, mouseY);
  const [panImage, setPanImage] = useState(false);

  const moveMousePanImage = (e) => {
    if (panImage) {
      console.log(e.pageX, e.pageY);
      let image = document.getElementsByClassName('main_image_exp_po')[0];

      console.log(image);
      console.log(image.offsetWidth, image.offsetHeight);
      console.log(image.offsetLeft, image.offsetTop);

      image.style.transformOrigin = ((e.pageX - image.offsetLeft) / image.offsetWidth) * 100 + '% ' +
        ((e.pageY - image.offsetTop) / image.offsetHeight) * 100 + '% ';
      // image.style.transformOrigin = ((e.pageX - image.offset().left) / image.width()) * 100 + '% ' +
      //   ((e.pageY - image.offset().top) / image.height()) * 100 + '% ';



    }
  };

  // .on('mousemove', function(e) {
  //   $(this).css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'});


  useLayoutEffect(() => {
    if (zoom) {
      document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(2.5)';
      document.getElementsByClassName('main_image_exp_po')[0].style.cursor = 'zoom-out';
      setPanImage(true);

    } else {
      document.getElementsByClassName('main_image_exp_po')[0].style.transform = 'scale(1)';
      document.getElementsByClassName('main_image_exp_po')[0].style.cursor = 'zoom-in';
      setPanImage(false);

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
          }}
          onMouseMove={moveMousePanImage}
          // onMouseMove={() => {
          //   console.log(mouseX, mouseY);
          // }}
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