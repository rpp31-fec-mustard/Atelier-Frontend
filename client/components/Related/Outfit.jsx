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
          renderRelated={props.renderRelated}
          outfit={true}
        />
      );
    });
  } else {
    outfitProducts = [
      <div key={'add-product'} className="add-product">Add a product here
        <br></br>
        <br></br>
        <i className="ri-add-line"></i>
      </div>
    ];
  }

  return (
    <div id="your-outfit" className="related-submodule">
      <h3>YOUR OUTFIT</h3>
      <div className="prod-cards-container">
        <div className="lbutton-container">
          <LeftButton
            cardsWrapper={cardsWrapper}
            handleLeftScroll={props.handleScroll.handleLeftScroll}
          />
        </div>
        <section className="prod-cards-wrapper" ref={cardsWrapper} onScroll={
          (event) => {
            debugger;
            props.checkScrollPosition(cardsWrapper.current);
          }
        }>
          {outfitProducts}
        </section>
        <div className="rbutton-container">
          <RightButton
            cardsWrapper={cardsWrapper}
            handleRightScroll={props.handleScroll.handleRightScroll}
          />
        </div>
      </div>
    </div>
  );

};

export default Outfit;