import React from 'react';
import ReactDOM from 'react-dom';
import {DEBUG} from './ProductOverview.jsx';

const StyleSelector = ({styles, styleIndex}) => {
  var mlog = (DEBUG) ? console.log : () => {};

  mlog('styleSelector:', styles);
  mlog('styleNum:', styleIndex);

  if (styles) {

    return (
      <div className='style_po'>
        <div className='style_text_po'>
          <p className='text_po'>STYLE {'>'} {styles[styleIndex].name}</p>
        </div>
        <div className='style_row_thumbnail_po'>
          <div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[0].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
          <div className='style_thumbnail_po'></div>
          <div className='style_thumbnail_po'></div>
          <div className='style_thumbnail_po'></div>
        </div>
        <div className='style_row_thumbnail_po'>
          <div className='style_thumbnail_po'></div>
          <div className='style_thumbnail_po'></div>
          <div className='style_thumbnail_po'></div>
          <div className='style_thumbnail_po'></div>
        </div>
      </div>
    );
  } else {
  }
};

export default StyleSelector;

{/* <div className='style_row_thumbnail_po'>
<div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[0].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
<div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[1].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
<div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[2].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
<div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[3].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
</div>
<div className='style_row_thumbnail_po'>
<div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[4].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
<div className='style_thumbnail_po' style={{backgroundImage: `url(${styles[5].photos[0].thumbnail_url})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
<div className='style_thumbnail_po'></div>
<div className='style_thumbnail_po'></div>
</div> */}