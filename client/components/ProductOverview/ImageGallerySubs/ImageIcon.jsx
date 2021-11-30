import React, {useEffect, useRef} from 'react';

const ImageIcon = ({iconId, photoIndex, handleThumbnailClick}) => {
  console.log('imageIcon', iconId, photoIndex, `image_icon_${iconId}`);

  let color;
  (iconId === photoIndex ) ? color = '#FFDB58' : color = 'rgb(125, 125, 125)';

  return ( <React.Fragment>
    <div className={`image_icon_${iconId} image_icon_po`}
      onClick={ () => { handleThumbnailClick(iconId); }}
      data-testid={`image_icon_${iconId}`}
      style={{backgroundColor: color}}></div>
  </React.Fragment>
  );
};

export default ImageIcon;
