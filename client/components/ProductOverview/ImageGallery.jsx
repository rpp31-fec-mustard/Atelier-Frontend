/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery.scrollto';   //was a bug if active?  bugo1.scrollto
import $ from 'jquery';

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

  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoIndexMax, setPhotoIndexMax] = useState(0);

  const cW2 = React.useRef(null); //testing

  const imageLeftClick = () => {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
    // document.getElementsByClassName('thumb_selected_po')[0].scrollIntoView({block: 'center', behavior: 'smooth'}); //janky
    let currentTop = document.getElementById('tb_po').scrollTop
    let selectedTop = 60 * photoIndex;
    cW2.current.scrollBy({top: selectedTop - currentTop - 180, behavior: 'smooth'})

    // let container = $('#tb_po');
    // let item = $('#thumb_selected_po');
    // let position = scrollTo.offset().top - container.offset().top + container.scrollTop();
    // container.scrollTo(document.getElementById(item), 800);
    // container.scrollTo(0, 300);
    // console.log('jquery check', $("#tb_po").length)
    // container.scrollTo(0, 300);
    // $('.thumbnails_po').scrollTo(document.getElementById('thumb_selected_po'), 800);
    // document.getElementsByClassName('thumbnails_po')[0].scrollBy({top: -20, behavior: 'smooth'})
  };

  const imageRightClick = () => {
    if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
    // document.getElementsByClassName('thumb_selected_po')[0].scrollIntoView({block: 'center', behavior: 'smooth'}); //janky
    // cW2.current.scrollTo(document.getElementById('thumb_selected_po'), 100)
    let currentTop = document.getElementById('tb_po').scrollTop
    let selectedTop = 60 * photoIndex;
    cW2.current.scrollBy({top: selectedTop - currentTop - 180, behavior: 'smooth'}) //good for incremental scroll
    // let container = $('tb_po'); //bug01.scrollto
    // let item = $('#thumb_selected_po'); //bug01.scrollto
    // let position = scrollTo.offset().top - containe.offset().top + container.scrollTop();
    // container.scrollTo(document.getElementById(item), 800);
    // container.scrollTo(0, 200);
    // console.log('jquery check', $("#tb_po").length)
    // $('.thumbnails_po').scrollTo(document.getElementById('thumb_selected_po'), 100);
    // document.getElementsByClassName('thumbnails_po')[0].scrollBy({top: 20, behavior: 'smooth'})
  };

  const [isShowing, setIsShowing] = useState(false);
//useLayoutEffect?
  useLayoutEffect(() => {
    mlog('IG useEffect to set index to 0');
    setPhotoIndex(0);
  }, [productId]);

  const handleClickImage = () => {
    setIsShowing(true);
  };

  const handleThumbnailClick = (index1) => {
    console.log('htc', index1);
    setPhotoIndex(index1);
    // document.getElementsByClassName(`image_icon_${index}`)[0].style.backgroundColor = 'white'
  };

// useEffect(() => {
//   // console.log(document.getElementsByClassName('style_row_thumbnail_po')[0]);
//   // document.getElementsByClassName('style_row_thumbnail_po')[0].scrollBy({top: 20, behavior: 'smooth'})
//   // document.getElementsByClassName('thumbnails_po')[0].scrollBy({top: 20, behavior: 'smooth'})
//   // console.log(cW2);
//   // console.log(cW2.current);
//   // cW2.current.scrollBy({top: 20, behavior: 'smooth'})

// }, [photoIndex]);


  // const handleIconClick = (index) => {
  //   setIndex(index);
  // };
  //needed because useEffect above is not resolved in time
  //when productId changes and new product is fetched, seems like the render below is resolved
  //before useEffect resets the index to 0.
  if (photos[photoIndex]) {
    // let node = document.getElementsByClassName('image_gallery_po').style;
    // // mlog(logC + ' node', node);

    return (
      <React.Fragment>

        <div className='image_container_po'>
          <img className='main_image_po'
            src={photos[photoIndex].url}
            alt={altText}
            data-testid='main-image' />
          <div className='image_gallery_po'>
            <ThumbnailsBar
              photos={photos}
              photoIndex={photoIndex}
              handleThumbnailClick={handleThumbnailClick}
              altText = {altText}
              cW2={cW2}
              />
            <div className='arrow_po'>
              <div className='arrow_space_po' onClick={handleClickImage}></div>
              <ArrowLeft
                imageLeftClick={imageLeftClick}
                photoIndex={photoIndex} />
              <div className='arrow_space_po' onClick={handleClickImage}></div>
            </div>
            <div className='space01_po' onClick={handleClickImage} data-testid='click-exp-view' ></div>
            {/* <div onClick={() => {
                console.log(cW2);
                console.log(cW2.current);
                cW2.current.scrollBy({top: 20, behavior: 'smooth'})
            }}>test</div> */}
            <FullScreenModal
              currentStyle={currentStyle}
              productName={productName}
              index={photoIndex}
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

