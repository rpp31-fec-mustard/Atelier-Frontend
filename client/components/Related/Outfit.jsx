import * as React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const Outfit = (props) => {
  const cardsWrapper = React.useRef(null);

  let outfitProducts;

  // React.useEffect(() => {
  //   console.log('OUTFIT LIST CHANGING');
  // }, [props.outfitList.length]);

  if (props.outfitList.length) {
    // console.log(props.outfitList);
    outfitProducts = props.outfitList.map((item) => {
      return (
        <ProductCard
          key={item.id}
          product={item}
          handleAction={props.handleAction}
          renderRelated={props.renderRelated}
          outfitList={props.outfitList}
          outfit={true}
          darkMode={props.darkMode}
        />
      );
    });
  } else {
    outfitProducts = [
      <div key={'add-product'} className="add-product">Add a product
        <br></br>
        <br></br>
        <i className="ri-add-line"></i>
      </div>
    ];
  }


  return (
    <div id="your-outfit" className="related-submodule">
      <div className="related-submodule-content">
        <LeftButton
          cardsWrapper={cardsWrapper}
          handleLeftScroll={props.handleScroll.handleLeftScroll}
        />
        <div className="prod-cards-container">
          <h3>YOUR OUTFIT</h3>
          <div className="prod-cards-wrapper" ref={cardsWrapper} onScroll={
            (event) => { props.checkScrollPosition(cardsWrapper.current); }
          }>
            {outfitProducts}
          </div>
        </div>
        <RightButton
          cardsWrapper={cardsWrapper}
          cardsWrapperLength={props.outfitList.length}
          handleRightScroll={props.handleScroll.handleRightScroll}
          outfit={true}
        />
      </div>
    </div>
  );

};

export default Outfit;