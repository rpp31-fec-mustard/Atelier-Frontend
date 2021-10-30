import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery.jsx';

const ProductOverview = () => (

  <div id='product_overview_main' className="module_container">
    <div className='top01'>
      <ImageGallery />
      <div className='right02'>
        <div className='stars_po' >STARS</div>
        <div className='name_block_po'>
        Category
          <h2>Expanded Product Name</h2>
        price
        </div>
        <div className='style_po'>STYLE </div>
        <div className='add_to_bag_po'>ADD TO BAG</div>
      </div>
    </div>
    <div className='bottom01'>
      <div className='product_desc_po'>Product </div>
      <div className= 'highlights_po'>Highlights</div>
    </div>
  </div>

);


export default ProductOverview;