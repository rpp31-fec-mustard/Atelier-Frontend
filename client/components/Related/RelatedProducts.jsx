import * as React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {
  // console.log(props);
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
      <h3>RELATED PRODUCTS</h3>
      <div className="prod-cards-container">
        <LeftButton cardsWrapper={cardsWrapper}/>
        <section className="prod-cards-wrapper" ref={cardsWrapper}>
          {productCards}
        </section>
        <RightButton cardsWrapper={cardsWrapper}/>
      </div>
    </div>
  );
};

export default RelatedProducts;
