/* eslint-disable func-style */
import * as React from 'react';
import axios from 'axios';
import { useTracking } from 'react-tracking';

import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';

const Related = (props) => {
  const [productId, setProductId] = React.useState(props.productId);
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const { Track, trackEvent } = useTracking({},
    { dispatch: data => {
      axios.post('/interactions', {
        time: data.time,
        element: data.element,
        widget: data.widget
      })
        .catch((error) => {
          console.log('Client unable to post interaction: ', error);
        });
    }});

  // let outfitStorage;
  // // initialize localStorage for outfitList
  // if (!localStorage.outfitList) {
  //   outfitStorage = [];
  // } else {
  //   // set outfitStorage with localStorage outfitList
  //   outfitStorage = JSON.parse(localStorage.outfitList);
  //   // star all products in relatedProducts present in outfitList
  //   relatedProducts.map((relProduct) => {
  //     const relProductId = relProduct.id;
  //     outfitStorage.forEach((outfitProduct) => {
  //       const outfitProdId = outfitProduct.id;
  //       if (relProductId === outfitProdId) {
  //         relProduct['starred'] = true;
  //       }
  //     });
  //   });
  // }

  // const [outfitList, setOutfitList] = React.useState(outfitStorage);

  // handle adding/removing home product to outfit list
  // React.useEffect(() => {
  //   if (props.addedHomeProduct.id) {
  //     // add to outfit list
  //     console.log('ADD HOME PRODUCT');
  //     const newOutfitList = props.outfitList.filter((product) => {
  //       const productId = product.id.toString(10);
  //       return productId !== props.addedHomeProduct.id;
  //     }).concat([props.addedHomeProduct]);

  //     props.setOutfitList(newOutfitList);
  //     localStorage.setItem('outfitList', JSON.stringify(newOutfitList));

  //   } else if (typeof props.addedHomeProduct === 'string') {
  //     // remove from outfit list
  //     console.log('REMOVE HOME PRODUCT');
  //     const newOutfitList = props.outfitList.filter((product) => {
  //       const productId = product.id.toString(10);
  //       return productId !== props.addedHomeProduct;
  //     });

  //     props.setOutfitList(newOutfitList);
  //     localStorage.setItem('outfitList', JSON.stringify(newOutfitList));
  //   }
  // }, [props.addedHomeProduct]);


  React.useEffect(() => {
    axios.post('/related', { productId: props.productId })
      .then((result) => {
        setRelatedProducts(result.data);
      })
      .catch((error) => {
        console.log('Client unable to get related products: ', error);
      });
  }, [props.productId]);

  // handle adding and removing outfit from outfit list
  const handleAction = (event) => {
    const target = event.target.tagName === 'I' ? event.target : event.target.firstElementChild;
    const targetProductId = target.parentElement.parentElement.parentElement.classList[1];

    if (target.className === 'ri-star-fill') {
      // add to outfit list
      const newRelatedProducts = relatedProducts.map((product) => {
        const productId = product.id.toString(10);
        if (productId === targetProductId) {
          product['starred'] = true;

          // updateState and localStorage with new outfit list
          const newOutfitList = props.outfitList.concat([product]);
          props.setOutfitList(newOutfitList);
          localStorage.setItem('outfitList', JSON.stringify(newOutfitList));
          return product;
        } else {
          return product;
        }
      });

      setRelatedProducts(newRelatedProducts);
    } else {
      // remove from outfit list
      const newRelatedProducts = relatedProducts.map((product) => {
        const productId = product.id.toString(10);
        if (productId === targetProductId) {
          product['starred'] = false;
          return product;
        } else {
          return product;
        }
      });

      setRelatedProducts(newRelatedProducts);

      // updateState and localStorage with new outfit list
      const newOutfitList = props.outfitList.filter((product) => {
        const productId = product.id.toString(10);
        return productId !== targetProductId;
      });
      props.setOutfitList(newOutfitList);
      localStorage.setItem('outfitList', JSON.stringify(newOutfitList));
    }
  };

  const handleLeftScroll = (scrollRef) => {
    const cardsWrapper = scrollRef.current;
    cardsWrapper.scrollBy({
      top: 0,
      left: -230,
      behavior: 'smooth'
    });
  };

  const handleRightScroll = (scrollRef) => {
    const cardsWrapper = scrollRef.current;
    cardsWrapper.scrollBy({
      top: 0,
      left: 230,
      behavior: 'smooth'
    });
  };

  const checkScrollPosition = (cardsWrapperRef, cardsWrapperLength) => {
    const wrapperScrollPosition = Math.floor(cardsWrapperRef.scrollLeft);
    const wrapperMaxScrollPosition = cardsWrapperRef.scrollWidth - cardsWrapperRef.clientWidth;
    const submodule = event.target.closest('.related-submodule').id;
    // handle left button
    const lButton = submodule === 'related-products' ?
      document.getElementsByClassName('left nav-button')[0] :
      document.getElementsByClassName('left nav-button')[1];

    lButton.style.color = wrapperScrollPosition > 0 ? 'black' : 'transparent';

    // handle right button
    const rButton = submodule === 'related-products' ?
      document.getElementsByClassName('right nav-button')[0] :
      document.getElementsByClassName('right nav-button')[1];

    rButton.style.color = wrapperScrollPosition === wrapperMaxScrollPosition ? 'transparent' : 'black';
  };

  return (
    <Track>
      <section id="related-main" className="module_container">
        <RelatedProducts
          productId={productId}
          relatedProducts={relatedProducts}
          handleAction={props.toggleToOutfitList}
          handleScroll={{handleLeftScroll: handleLeftScroll, handleRightScroll: handleRightScroll}}
          checkScrollPosition={checkScrollPosition}
          homeProduct={props.homeProduct}
          renderRelated={props.renderRelated}
          outfitList={props.outfitList}
        />
        <Outfit
          outfitList={props.outfitList}
          handleAction={props.toggleToOutfitList}
          handleScroll={{handleLeftScroll: handleLeftScroll, handleRightScroll: handleRightScroll}}
          checkScrollPosition={checkScrollPosition}
          renderRelated={props.renderRelated}
        />
      </section>
    </Track>
  );
};

export default Related;
