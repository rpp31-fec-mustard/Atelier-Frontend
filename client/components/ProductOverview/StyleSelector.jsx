import React from 'react';
import ReactDOM from 'react-dom';
// import {DEBUG} from './ProductOverview.jsx';
import StyleThumbnail from './StyleCartSubs/StyleThumbnail.jsx';

const StyleSelector = ({styles, styleIndex}) => {
  const DEBUG = false;
  var mlog = (DEBUG) ? console.log : () => {};

  mlog('styleSelector:', styles);
  mlog('styleNum:', styleIndex);
  mlog('singleStyle:', styles[styleIndex]);

  if (styles) {

    return (
      <div className='style_po'>
        <div className='style_text_po'>
          <p className='text_po'>STYLE {'>'} {styles[styleIndex].name}</p>
        </div>
        <div className='style_row_thumbnail_po'>
          {
            styles.map((style) => {
              mlog('i', style);
              mlog('id', style.style_id);
              return (
                <StyleThumbnail key={style.style_id} style={style} styleId={style.style_id}/>
              );
            })
          }
        </div>
      </div>
    );
  } else {
  }
};

export default StyleSelector;