/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

export var DEBUG = false;
// DEBUG = true;
var mlog = (DEBUG) ? console.log : () => {};
var logC = '\x1b[33m';

import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import Stars from '../Global/Stars.jsx';
import Price from '../Global/Price.jsx';
import defaultProduct from '../defaultProduct.jsx';


const ProductOverview = ({product, id, total, toggleProductToOutfitList, isProductInOutfitList}) => {
  const [currentStyleIndex, setStyleIndex] = useState(0);
  const [styles, setStyles] = useState(defaultProduct.styles);
  const [review, setReview] = useState(false);


  const getProductStyles = () => {
    // mlog('this.props.product.id :', productId);
    axios.get('/product/styles', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        // mlog(logC + ' PO res product/styles:', res.data);
        setStyles(res.data);
      })
      .catch((err) => {
        console.log('Error retrieving product/styles: ', err);
      });
  };

  const getProductReviews = () => {
    // mlog('this.props.product.id :', productId);
    axios.get('/getReviews', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        // mlog(logC + ' PO res product/reviews:', res.data);
        setReview(!!res.data.reviewsArr.length);
      })
      .catch((err) => {
        console.log('Error retrieving product/reviews: ', err);
      });
  };



  const loaded = useRef(true); //testing
  // const loaded = useRef(false); //for testing Ml

  useEffect(async () => {
    if (loaded.current) {
      // mlog(logC + ' useEffect triggered by id change', id);
      await getProductStyles(id);
      await getProductReviews(id);
      setStyleIndex(0);
    } else {
      loaded.current = true;
    }
  }, [id]);

  useEffect(() => {

  }, []);

  const handleStyleOnClick = (selectedStyleIndex) => {
    // mlog('PO handleStyleOnClick setIndex', styleIndex);
    setStyleIndex(selectedStyleIndex);
  };


  // if (styles !== undefined) {

    // mlog('state defined: component load executed');
  // mlog(logC + ' PO product destructure:', product );
  const {
    description,
    name,
    category,
    default_price,   /* eslint-disable-line camelcase, no-multi-spaces*/
    slogan,
    features
  } = product;
  // mlog(logC + ' features', features);

    // mlog(styles);

  return (
    <React.Fragment>
      <div className='module_container' id='product_overview_main' >
        <div className='top01'>
          <ImageGallery currentStyle={styles.results[currentStyleIndex]}
            productId={id}
            productName={product.name} />
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
              {category}
              <p id='name_po'>{name}</p>
              {/* <p id='name_po'>first line second line</p> */}
            </div>
            <div className='price_po'>
              {/* eslint-disable-next-line camelcase, no-multi-spaces */}
              <Price salePrice={styles.results[currentStyleIndex].sale_price}
                originalPrice={styles.results[currentStyleIndex].original_price}/>
            </div>
            <StyleSelector
              styles={styles.results}
              currentStyleIndex={currentStyleIndex}
              productName={name}
              productId={id}
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
                // mlog(logC + 'feature', feature);
                return (
                  <div key={`F${index}`}>{feature.value} {feature.feature}</div>);
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  // } else {
  //   mlog('state undefined: props not correct. component load delayed');
  //   return <div>props load delayed</div>;
  // }
};


export default ProductOverview;
