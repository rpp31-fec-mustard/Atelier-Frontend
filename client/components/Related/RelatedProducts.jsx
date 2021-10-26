import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedProducts = (props) => {

  return (
    <div id="related_products" className="related_submodule">
      <h1>RELATED PRODUCTS LIST</h1>
      <div className="prod_card_container">
        <LeftButton />
        <ProductCard action={'star'} image={null}/>
        <ProductCard action={'star'} image={'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'} category={'Pants'} productName={'Morning Joggers'} price={'40.00'}/>
        <ProductCard action={'star'} image={'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'} category={'Dress Shoes'} productName={'Blues Suede Shoes'} price={'120.00'}/>
        <ProductCard action={'star'} image={'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'} category={'Kicks'} productName={'YEasy 350'} price={'450.00'}/>
        <RightButton />
      </div>
    </div>
  );

};

export default RelatedProducts;