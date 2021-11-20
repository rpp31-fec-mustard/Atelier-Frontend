import React, {useEffect, useRef} from 'react';

const ImageIcon = ({i, photoIndex, handleThumbnailClick}) => {
  console.log('imageIcon', i, photoIndex, `image_icon_${i}`);

  let color;
  (i === photoIndex ) ? color = '#FFDB58' : color = 'rgb(125, 125, 125)';

  return ( <React.Fragment>
    <div className={`image_icon_${i} image_icon_po`}
      onClick={ () => { handleThumbnailClick(i); }}
      data-testid={`image_icon_${i}`}
      style={{backgroundColor: color}}></div>
  </React.Fragment>
  );
};

export default ImageIcon;
