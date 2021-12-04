/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import Stars from '../Global/Stars.jsx';
import Price from '../Global/Price.jsx';
import defaultProduct from '../defaultProduct.jsx';


const ProductOverview = ({product, id, total, toggleProductToOutfitList, isProductInOutfitList, darkMode}) => {

  const [currentStyleIndex, setStyleIndex] = useState(0);
  const [styles, setStyles] = useState(defaultProduct.styles);
  const [review, setReview] = useState(false);


  const getProductStyles = () => {
    axios.get('/product/styles', {
      params: {
        productId: product.id
      }
    })
      .then((res) => {
        setStyles(res.data);
      })
      .catch((err) => {
        console.log('Error retrieving product/styles: ', err);
      });
  };

  const getProductReviews = (id) => {
    axios.get('/getReviews', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        setReview(!!res.data.reviewsArr.length);
      })
      .catch((err) => {
        console.log('Error retrieving product/reviews: ', err);
      });
  };

  const loaded = useRef(true); //testing

  useEffect(async () => {
    getProductStyles(product.id);
    localStorage.setItem('styles', JSON.stringify(styles));
    getProductReviews(product.id);
    setStyleIndex(0);
  }, [product]);


  const handleStyleOnClick = (selectedStyleIndex) => {
    setStyleIndex(selectedStyleIndex);
  };


  // if (styles !== undefined) {

  const {
    description,
    name,
    category,
    default_price,   /* eslint-disable-line camelcase, no-multi-spaces*/
    slogan,
    features
  } = product;

  return (
    <React.Fragment>
      <div className='module_container dm-' id='product_overview_main' >
        <div className='top01'>
          <ImageGallery currentStyle={styles.results[currentStyleIndex]}
            productId={id} //check which to keep
            // productId={product.id}  //check which to keep
            productName={product.name}
            darkMode={darkMode}
          />
          <div className='right02'>
            <div className='stars_po'>
              <Stars productId={product.id} total={total} />

              {/* making change this line here */}
              { (() => {
                if (review) {
                  return ( <a className='read_reviews_po'
                    onClick={()=> { window.location.href = '#ratings_reviews'; }}>Read all reviews</a> );
                }
              })()
              }

            </div>
            <div className='name_block_po'>
              <p id='category_po'>{category}</p>
              <p id='name_po'>{name}</p>
            </div>
            <div className='price_po'>
              <Price salePrice={styles.results[currentStyleIndex].sale_price}
                originalPrice={styles.results[currentStyleIndex].original_price}/>
            </div>
            <StyleSelector
              styles={styles.results}
              currentStyleIndex={currentStyleIndex}
              productName={name}
              productId={product.id}
              handleStyleOnClick={handleStyleOnClick}
              toggleProductToOutfitList={toggleProductToOutfitList}
              isProductInOutfitList={isProductInOutfitList}
            />
          </div>
        </div>
        <div className='bottom01'>
          <div className='product_desc_po'>
            <h2>{slogan}</h2><br/>
            {description}
          </div>
          <div className='highlights_po'>
            Highlights:<br/>
            {
              features.map((feature, index) => {
                return (
                  <div key={`F${index}`}>{feature.value} {feature.feature}</div>);
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductOverview;
