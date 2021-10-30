import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const YourOutfit = (props) => {
  const outfitProducts = props.outfitList.map((item) => {
    return (
      <ProductCard
        key={item.id}
        className={item.id}
        handleStar={props.handleStar}
        action={'x'}
        id={item.id}
        image={null}
        category={item.category}
        name={item.name}
        price={null}
        rating={item.rating}
      />
    );
  });

  return (
    <div id="your_outfit" className="related_submodule">
      <h1>YOUR OUTFIT LIST</h1>
      <div className="prod_card_container">
        <LeftButton />
        {outfitProducts}
        {/* <ProductCard action={'x'}/>
        <ProductCard action={'x'}/>
        <ProductCard action={'x'}/>
        <ProductCard action={'x'}/> */}
        <RightButton />
      </div>
    </div>
  );

};

export default YourOutfit;