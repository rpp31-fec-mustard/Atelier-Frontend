import * as React from 'react';
import axios from 'axios';

import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';

const Related = (props) => {
  const [productId, setProductId] = React.useState(props.productId);
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [outfitList, setOutfitList] = React.useState([]);

  React.useEffect(() => {
    axios.post('/related', { productId: props.productId })
      .then((result) => {
        setRelatedProducts(result.data);
      })
      .catch((error) => {
        console.log('Client unable to get related products: ', error);
      });
  }, [props.productId]);

  React.useEffect(() => {
    // send outfit list to server every time outfit list changes
    axios.post('/outfit', { outfitList })
      .then((result) => {
        console.log({result});
      })
      .catch((error) => {
        console.log('Client unable to send outfit list to server', error);
      });
  }, [outfitList]);

  const handleAction = (event) => {
    const target = event.target.tagName === 'I' ? event.target : event.target.firstElementChild;
    const targetProductId = target.parentElement.parentElement.parentElement.classList[1];

    if (target.className === 'ri-star-fill') {
      // add to outfit list
      const newRelatedProducts = relatedProducts.map((product) => {
        const productId = product.id.toString(10);
        if (productId === targetProductId) {
          product['starred'] = true;
          // updateState with outfit list
          setOutfitList(outfitList.concat([product]));
          return product;
        } else {
          return product;
        }
      });

      setRelatedProducts(newRelatedProducts);
    } else {
      // remove from outfit list
      const newOutfitList = outfitList.filter((product) => {
        const productId = product.id.toString(10);
        return productId !== targetProductId;
      });

      const newRelatedProducts = relatedProducts.map((product) => {
        const productId = product.id.toString(10);
        if (productId === targetProductId) {
          product['starred'] = false;
          return product;
        } else {
          return product;
        }
      });

      setOutfitList(newOutfitList);
      setRelatedProducts(newRelatedProducts);
    }
  };

  const handleLeftScroll = (scrollRef, lButtonRef, scrollPosition) => {
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
      document.getElementsByClassName('nav-button')[0] :
      document.getElementsByClassName('nav-button')[2];

    lButton.style.color = wrapperScrollPosition > 0 ? 'black' : 'transparent';

    // handle right button
    const rButton = submodule === 'related-products' ?
      document.getElementsByClassName('nav-button')[1] :
      document.getElementsByClassName('nav-button')[2];

    rButton.style.color = wrapperScrollPosition === wrapperMaxScrollPosition ? 'transparent' : 'black';
  };

  return (
    <div id="related-main" className="module_container">
      <RelatedProducts
        productId={productId}
        relatedProducts={relatedProducts}
        handleAction={handleAction}
        handleScroll={{handleLeftScroll: handleLeftScroll, handleRightScroll: handleRightScroll}}
        checkScrollPosition={checkScrollPosition}
        homeProduct={props.homeProduct}
        renderRelated={props.renderRelated}
      />
      <Outfit
        outfitList={outfitList}
        handleAction={handleAction}
        handleScroll={{handleLeftScroll: handleLeftScroll, handleRightScroll: handleRightScroll}}
        checkScrollPosition={checkScrollPosition}
        renderRelated={props.renderRelated}
      />
    </div>
  );
};

export default Related;
