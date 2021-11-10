import * as React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {
  const cardsWrapper = React.useRef(null);
  const {rButtonVisible, lButtonVisible} = React.useState({
    lButtonVisible: true,
    rButtonVisible: true
  });

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
      <h3>RELATED PRODUCTS</h3>
      <div className="prod-cards-container">
        <div className="lbutton-container">
          <LeftButton cardsWrapper={cardsWrapper} handleLeftScroll={props.handleScroll.handleLeftScroll}/>
        </div>
        <section className="prod-cards-wrapper" ref={cardsWrapper}>
          {productCards}
        </section>
        <div className="rbutton-container">
          <RightButton cardsWrapper={cardsWrapper} handleRightScroll={props.handleScroll.handleRightScroll}/>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
