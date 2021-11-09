import * as React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const Outfit = (props) => {
  const cardsWrapper = React.useRef(null);

  let outfitProducts;

  if (props.outfitList.length) {
    outfitProducts = props.outfitList.map((item) => {
      return (
        <ProductCard
          key={item.id}
          product={item}
          handleAction={props.handleAction}
          outfit={true}
        />
      );
    });
  } else {
    outfitProducts = (
      <div className="add-product">Add a product here
        <br></br>
        <br></br>
        <i className="ri-add-line"></i>
      </div>
    );
  }

  return (
    <div id="your-outfit" className="related-submodule">
      <h3>YOUR OUTFIT</h3>
      <div className="prod-cards-container">
        <LeftButton cardsWrapper={cardsWrapper}/>
        <section className="prod-cards-wrapper" ref={cardsWrapper}>
          {outfitProducts}
        </section>
        <RightButton cardsWrapper={cardsWrapper}/>
      </div>
    </div>
  );

};

export default Outfit;