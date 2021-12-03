import React from 'react';
import ReactDOM from 'react-dom';
import StyleThumbnail from './StyleCartSubs/StyleThumbnail.jsx';
import AddToCart from './AddToCart.jsx';

const StyleSelector = ({
  styles,
  currentStyleIndex,
  productName,
  productId,
  handleStyleOnClick,
  toggleProductToOutfitList,
  isProductInOutfitList,
}) => {

  if (styles) {
    let styleIndex = -1;

    return (
      <React.Fragment>
        <div className='style_po'>
          <div className='style_text_po'>
            <p className='text_po'>STYLE {'>'} {styles[currentStyleIndex].name}</p>
          </div>
          <div className='style_row_thumbnail_po'>
            {
              styles.map((style) => {
                styleIndex++;
                return (
                  <StyleThumbnail key={`ST${styleIndex}`}
                    style={style}
                    styleId={style.style_id}
                    productName={productName}
                    styleIndex={styleIndex}
                    currentStyleIndex={currentStyleIndex}
                    handleStyleOnClick={handleStyleOnClick}/>
                );
              })
            }
          </div>
        </div>
        <AddToCart
          productId={productId}
          style={styles[currentStyleIndex]}
          toggleProductToOutfitList={toggleProductToOutfitList}
          isProductInOutfitList={isProductInOutfitList}
        />
      </React.Fragment>
    );
  } else {
    console.log('state undefined: props not correct. component load delayed');
    return <div>props load delayed</div>;
  }
};

export default StyleSelector;
