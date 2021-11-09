import React from 'react';

const DEBUG = false;
var mlog = (DEBUG) ? console.log : () => {};

const StyleThumbnail = ({style, styleId}) => {
  mlog('TN', style.style_id, styleId);

  return (
    // <div key={styleId}>
    <div className='style_thumbnail_po'
      style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    </div>
    // </div>
  );

};

export default StyleThumbnail;