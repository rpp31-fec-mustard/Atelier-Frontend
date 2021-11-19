import React from 'react';
import {DEBUG} from '../ProductOverview.jsx';


const StyleThumbnail = ({ style, styleIndex, productName, handleStyleOnClick,
  currentStyleIndex }) => {
  // var DEBUG = true;
  var mlog = (DEBUG) ? console.log : () => {};

  mlog('TN', style.style_id);
  mlog('TN2', style);
  mlog('TN3', `${productName} in ${style.name}`);

  let checkMark = <i className="ri-checkbox-circle-line"></i>;
  const altText = `${productName} in ${style.name}`;

  return (
    <React.Fragment>
      <div className='style_thumb_container_po'>
        { (()=> {
          if (currentStyleIndex === styleIndex) {
            return ( <div className='style_selected_po'>
              <p className='style_checkmark_po'>{checkMark}</p>
            </div> );
          }
        })()}
        <img className='style_thumbnail_po'
          onClick={() => { handleStyleOnClick(styleIndex); }}
          src={style.photos[0].thumbnail_url}
          alt={altText} />
      </div>
    </React.Fragment>
  );

};

export default StyleThumbnail;
