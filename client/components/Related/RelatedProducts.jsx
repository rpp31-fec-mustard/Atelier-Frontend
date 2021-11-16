import * as React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {
  const cardsWrapper = React.useRef(null);

  const productCards = props.relatedProducts.map((item, i) => {
    return (
      <ProductCard
        key={item.id}
        handleAction={props.handleAction}
        product={item}
        homeProduct={props.homeProduct}
        renderRelated={props.renderRelated}
      />
    );
  });

  return (
    <div id="related-products" className="related-submodule">
      <div className="related-submodule-content">
        <div className="button-container">
          <LeftButton
            cardsWrapper={cardsWrapper}
            handleLeftScroll={props.handleScroll.handleLeftScroll}
          />
        </div>
        <div className="prod-cards-container">
          <h3>RELATED PRODUCTS</h3>
          <div className="prod-cards-wrapper" ref={cardsWrapper} onScroll={
            (event) => { props.checkScrollPosition(cardsWrapper.current); }
          }>
            {productCards}
          </div>
        </div>
        <div className="button-container">
          <RightButton
            cardsWrapper={cardsWrapper}
            cardsWrapperLength={productCards.length}
            handleRightScroll={props.handleScroll.handleRightScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
