import React from 'react';
import ReactDOM from 'react-dom';

const Thumbnail = ({photo, photoIndex, counter, handleThumbnailClick, altText}) => {

  const resizeUrl2 = (url, pixelWidth) => {
    let resultUrl = '';
    resultUrl = url.slice(0, (url.lastIndexOf('auto=format'))) + pixelWidth;
    return resultUrl;
  };

  let thumbSelected = '';
  (photoIndex === counter) ? thumbSelected = 'thumb_selected_po' : '';

  return (
    <React.Fragment>
      <div className={`thumbnail_select_po ${thumbSelected}`}
        id={`${thumbSelected}`} key={`TS${counter}`}>
        <div className={'thumbnail_frame_po'} key={`TF${counter}`}>
          <img className='thumbnail_box_po'
            alt={`Thumbnail of ${altText}`}
            src={resizeUrl2(photo, 'auto=format&w=200&h=200&fit=max&q=80')}
            onClick={ () => { handleThumbnailClick(counter); }}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Thumbnail;
