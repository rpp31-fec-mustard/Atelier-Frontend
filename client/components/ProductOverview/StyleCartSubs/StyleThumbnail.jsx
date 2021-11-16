import React from 'react';
import {DEBUG} from '../ProductOverview.jsx';


const StyleThumbnail = ({style, styleIndex, productName, handleStyleOnClick}) => {
  // var DEBUG = true;
  var mlog = (DEBUG) ? console.log : () => {};

  mlog('TN', style.style_id);
  mlog('TN2', style);
  mlog('TN3', `${productName} in ${style.name}`);

  const altText = `${productName} in ${style.name}`;

  return (
    <React.Fragment>
      <img className='style_thumbnail_po'
        onClick={() => { handleStyleOnClick(styleIndex); }}
        src={style.photos[0].thumbnail_url}
        alt={altText}>

      </img>
    </React.Fragment>
  );

};

export default StyleThumbnail;