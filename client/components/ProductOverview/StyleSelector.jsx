import React from 'react';
import ReactDOM from 'react-dom';
// import {DEBUG} from './ProductOverview.jsx';
import StyleThumbnail from './StyleCartSubs/StyleThumbnail.jsx';

const StyleSelector = ({styles, currentStyleIndex, productName, handleStyleOnClick}) => {
  const DEBUG = false;
  var mlog = (DEBUG) ? console.log : () => {};

  mlog('SS styleSelector:', styles);
  mlog('SS currentStyleIndex:', currentStyleIndex);
  mlog('SS singleStyle:', styles[currentStyleIndex]);

  if (styles) {
    let styleIndex = -1;

    return (
      <div className='style_po'>
        <div className='style_text_po'>
          <p className='text_po'>STYLE {'>'} {styles[currentStyleIndex].name}</p>
        </div>
        <div className='style_row_thumbnail_po'>
          {
            styles.map((style) => {
              mlog('i', style);
              mlog('id', style.style_id);
              styleIndex++;
              return (
                <StyleThumbnail style={style}
                  styleId={style.style_id}
                  productName={productName}
                  styleIndex={styleIndex}
                  handleStyleOnClick={handleStyleOnClick}/>
              );
            })
          }
        </div>
      </div>
    );
  } else {
    mlog('state undefined: props not correct. component load delayed');
    return <div>props load delayed</div>;
  }
};

export default StyleSelector;

// npm test -- ReactTestLib.test.js --coverage --collectCoverageFrom='../client/components/ProductOverview/StyleSelector.jsx'