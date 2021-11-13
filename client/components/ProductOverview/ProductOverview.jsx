/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

export const DEBUG = false;
var mlog = (DEBUG) ? console.log : () => {};

import React, {useRef, useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Stars from '../Global/Stars.jsx';
import Price from '../Global/Price.jsx';


const styleOnLoad = {
  'product_id': 59648,
  results: [
    {
      'style_id': 365413,
      name: 'Forest Green & Black',
      'original_price': '140.00',
      'sale_price': null,
      'default?': true,
      photos: [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
        },
      ],
      skus: {
        '2122777': {
          quantity: 8,
          size: 'XS'
        },
        '2122778': {
          quantity: 16,
          size: 'S'
        },
        '2122779': {
          quantity: 17,
          size: 'M'
        },
        '2122780': {
          quantity: 10,
          size: 'L'
        },
        '2122781': {
          quantity: 15,
          size: 'XL'
        },
        '2122782': {
          quantity: 4,
          size: 'XL'
        }
      }
    },
    {
      name: 'Style Two',
      photos: [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ]
    },
    {
      name: 'Style Three',
      photos: [
        {
          'thumbnail_url': 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }
      ]
    }
  ]
};



const ProductOverview = ({product, id}) => {
  const [productId, setProductId] = useState(id);
  const [currentStyleIndex, setIndex] = useState(0);
  const [styles, setStyles] = useState(styleOnLoad);
  // const [product, setProduct] = useState(styleOnLoad);
  mlog('PO product :', product);
  // mlog('PO id :', id);
  mlog('PO styles:', styles);
  mlog('PO productId:', productId);
  mlog('PO styleIndex:', currentStyleIndex);


  const getProductStyles = (productId) => {
<<<<<<< HEAD
    mlog('this.props.product.id :', productId);
    axios.post('/product/styles', { productId: id })
=======
    // mlog('this.props.product.id :', productId);
    axios.get('/product/styles', {
      params: {
        productId: id
      }
    })
>>>>>>> main
      .then((res) => {
        mlog('@client PO res product/styles:', res.data);
        // if (JSON.stringify(res.data) !== JSON.stringify(styles)) {

        setStyles(res.data);
        // }
      })
      .catch((err) => {
        console.log('Error retrieving product/styles: ', err);
      });
  };

  //check to see if data is the same?
  //if so, do not pass to productStyles?
  useEffect((productId) => {
    getProductStyles(productId);
    setIndex(0);
  }, [id]);

  const handleStyleOnClick = (selectedStyleIndex) => {
    // mlog('PO handleStyleOnClick setIndex', styleIndex);
    setIndex(selectedStyleIndex);
  };

<<<<<<< HEAD
  if (styles !== undefined) {

    // mlog('PO:', );
    const {
      description,
      name,
      category,
      default_price,   /* eslint-disable-line camelcase, no-multi-spaces*/
      slogan
    } = product;


    mlog(styles);

    return (
      <div className='module_container' id='product_overview_main' >
        <div className='top01'>
          <ImageGallery photos={styles.results[currentStyleIndex].photos} />
          <div className='right02'>
            <div className='stars_po'>
              <Stars productId={product.id}/>
              <a className='read_reviews_po'
                onClick={()=> { window.location.href = '#ratings_reviews'; }}>Read all reviews</a>
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
            <StyleSelector styles={styles.results}
              currentStyleIndex={currentStyleIndex}
              handleStyleOnClick={handleStyleOnClick}/>
            <AddToCart styles={styles}/>
=======

//get productId route
  const getProductId = (id) => {
    axios.get('/product', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        this.setState({product: res.data});
      })
      .catch((error) => {
        console.log('Error retrieving product/all: ', error);
      });
  };





  // if (styles !== undefined) {
    // mlog('state defined: component load executed');
  mlog('PO product destructure:', product );
  const {
    description,
    name,
    category,
    default_price,   /* eslint-disable-line camelcase, no-multi-spaces*/
    slogan,
    features
  } = product;
  mlog('features', features);

    // mlog(styles);

  return (
    <div className='module_container' id='product_overview_main' >
      <div className='top01'>
        <ImageGallery photos={styles.results[currentStyleIndex].photos}
          productId={productId} />
        <div className='right02'>
          <div className='stars_po'>
            <Stars productId={product.id}/>
            <a className='read_reviews_po'
              onClick={()=> { window.location.href = '#ratings_reviews'; }}>Read all reviews</a>
>>>>>>> main
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
          <StyleSelector styles={styles.results}
            currentStyleIndex={currentStyleIndex}
            productName={name}
            handleStyleOnClick={handleStyleOnClick}/>
          <AddToCart styles={styles}/>
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
            features.map((feature) => {
              mlog('feature', feature);
              return (
                <div>{feature.value} {feature.feature}</div>);
            })
          }
        </div>
      </div>
    </div>
  );
  // } else {
  //   mlog('state undefined: props not correct. component load delayed');
  //   return <div>props load delayed</div>;
  // }
};


export default ProductOverview;



// componentDidMount() {
  //   getProductStyles(id);
  // };

  // const useDidMount = () => {
  //   const didMountRef = useRef(true);

  //   useEffect(() => {
  //     didMountRef.current = false;
  //   }, []);
  //   return didMountRef.current;
  // };

  // const didMount = useDidMount();
  // const [state, setState] = useState(0);

  // useEffect(() => {
  //   if (didMount) {
  //     console.log('mounted');
  //   } else {
  //     console.log('state updated');
  //   }
  // }, [state, didMount]);





/*/example data


/products                               | page (int), count (int)

  {
    "id": 59553,
    "campus": "hr-rpp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-10-18T22:50:41.839Z",
    "updated_at": "2021-10-18T22:50:41.839Z"
  },


/products/:product_id(int)              |

{
    "id": 59553,
    "campus": "hr-rpp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-10-18T22:50:41.839Z",
    "updated_at": "2021-10-18T22:50:41.839Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
}


/products/:product_id(int)/styles       |

{
    "product_id": "59553",
    "results": [
        {
            "style_id": 365413,
            "name": "Forest Green & Black",
            "original_price": "140.00",
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                }
            ],
            "skus": {
                "2122777": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122778": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122779": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122780": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122781": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122782": {
                    "quantity": 4,
                    "size": "XL"
                }
            }
        },
        {
            "style_id": 365414,
            "name": "Desert Brown & Tan",
            "original_price": "140.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                }
            ],
            "skus": {
                "2122783": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122784": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122785": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122786": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122787": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122788": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        },
        {
            "style_id": 365415,
            "name": "Ocean Blue & Grey",
            "original_price": "140.00",
            "sale_price": "100.00",
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                }
            ],
            "skus": {
                "2122789": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122790": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122791": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122792": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122793": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122794": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        },
        {
            "style_id": 365416,
            "name": "Digital Red & Black",
            "original_price": "140.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                    "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                }
            ],
            "skus": {
                "2122795": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122796": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122797": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122798": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122799": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122800": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        },
        {
            "style_id": 365417,
            "name": "Sky Blue & White",
            "original_price": "140.00",
            "sale_price": "100.00",
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ],
            "skus": {
                "2122801": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122802": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122803": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122804": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122805": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122806": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        },
        {
            "style_id": 365418,
            "name": "Dark Grey & Black",
            "original_price": "170.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                }
            ],
            "skus": {
                "2122807": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122808": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122809": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122810": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122811": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122812": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        }
    ]
}



/products/:product_id(int)/related      |

[
    59554,
    59555,
    59560,
    59559
]






//*/
