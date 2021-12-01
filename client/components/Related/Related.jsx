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

  React.useEffect(() => {
    axios.post('/related', { productId: props.productId })
      .then((result) => {
        setRelatedProducts(result.data);
      })
      .catch((error) => {
        console.log('Client unable to get related products: ', error);
      });
  }, [props.productId]);

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
          handleAction={props.toggleProductToOutfitList}
          handleScroll={{handleLeftScroll: handleLeftScroll, handleRightScroll: handleRightScroll}}
          checkScrollPosition={checkScrollPosition}
          homeProduct={props.homeProduct}
          renderRelated={props.renderRelated}
          outfitList={props.outfitList}
        />
        <Outfit
          outfitList={props.outfitList}
          handleAction={props.toggleProductToOutfitList}
          handleScroll={{handleLeftScroll: handleLeftScroll, handleRightScroll: handleRightScroll}}
          checkScrollPosition={checkScrollPosition}
          renderRelated={props.renderRelated}
        />
      </section>
    </Track>
  );
};

export default Related;
