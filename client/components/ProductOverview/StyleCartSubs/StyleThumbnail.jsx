import React from 'react';

const DEBUG = false;
var mlog = (DEBUG) ? console.log : () => {};

const StyleThumbnail = ({style, styleIndex, productName, handleStyleOnClick}) => {
  mlog('TN', style.style_id);
  mlog('TN2', style);
  mlog('TN3', `${productName} in ${style.name}`);

  const altText = `${productName} in ${style.name}`;

  return (
    <React.Fragment>
      <img className='style_thumbnail_po'
        key={style.style_id}
        onClick={() => { handleStyleOnClick(styleIndex); }}
        src={style.photos[0].thumbnail_url}
        alt={altText}>

      </img>
    </React.Fragment>
  );

};

export default StyleThumbnail;