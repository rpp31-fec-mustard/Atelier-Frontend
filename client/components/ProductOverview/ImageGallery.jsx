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
//useLayoutEffect?
  useLayoutEffect(() => {
    mlog('IG useEffect to set index to 0');
    setPhotoIndex(0);
  }, [productId]);

  const handleClickImage = () => {
    setIsShowing(true);
  };

  const handleThumbnailClick = (iconId) => {
    console.log('htc', iconId);
    setPhotoIndex(iconId);
    // document.getElementsByClassName(`image_icon_${index}`)[0].style.backgroundColor = 'white'

  };

  const resizeUrl = (url, pixelWidth) => {
    let resultUrl = '';
    resultUrl = url.slice(0, (url.lastIndexOf('crop&w=') + 7)) + pixelWidth +
      url.slice(url.lastIndexOf('q='));
    console.log(resultUrl);
    return resultUrl;
  };

  const resizeUrl2 = (url, pixelWidth) => {
    let resultUrl = '';
    resultUrl = url.slice(0, (url.lastIndexOf('auto=format'))) + pixelWidth;
    console.log(resultUrl);
    return resultUrl;
  };
  // fm=jpg&w=200&fit=max

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
            // src={resizeUrl2(photos[photoIndex].url, 'fm=jpg&w=1000&fit=max')}
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




/*/
url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'

url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'

fm=jpg&w=200&fit=max


//between 'crop&w=' and 'q='
//search from end
//lastIndexOf + 7    and    lastIndexOf - 1
//slice(0, (lastIndexOf + 7)) + <new size> + slice(lastIndexOf -1)


const resizeUrl100 = (url, pixelWidth) => {
  let resultUrl = '';
  resultUrl = url.slice(0, (url.lastIndexOf('crop&w=') + 7)) + '100' +
  url.slice(url.lastIndexOf('q='));

  return resultUrl;
};
//*/