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
    <section id="related-main" className="module_container">
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
    </section>
  );
};

export default Related;
