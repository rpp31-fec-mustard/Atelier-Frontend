import React from 'react';

const StyleThumbnail = ({ style, styleIndex, productName, handleStyleOnClick,
  currentStyleIndex }) => {

  let checkMark = <i className="ri-checkbox-circle-line"></i>;
  const altText = `${productName} in ${style.name}`;

  const resizeUrl2 = (url, pixelWidth) => {
    let resultUrl = '';
    resultUrl = url.slice(0, (url.lastIndexOf('auto=format'))) + pixelWidth;
    return resultUrl;
  };

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
          src={resizeUrl2(style.photos[0].thumbnail_url, 'auto=format&w=200&h=200&fit=clip&q=80')}
          alt={altText} />
      </div>
    </React.Fragment>
  );
};

export default StyleThumbnail;
