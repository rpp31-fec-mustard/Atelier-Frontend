import React from 'react';

const DEBUG = false;
var mlog = (DEBUG) ? console.log : () => {};

const StyleThumbnail = ({style, styleId, styleIndex, handleStyleOnClick}) => {
  mlog('TN', style.style_id, styleId);

  return (
    <div key={styleId}
      className='style_thumbnail_po'
      onClick={() => { handleStyleOnClick(styleIndex); }}
      style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    </div>
    // </div>
  );

};

export default StyleThumbnail;


//click here will change at what component?
//what changes?
//price, style name, image, size, quantity
//change at productOverview
