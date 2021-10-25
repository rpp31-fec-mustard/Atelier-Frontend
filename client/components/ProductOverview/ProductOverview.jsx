import React from 'react';
import ReactDOM from 'react-dom';

const ProductOverview = () => (

  <div id='product_overview_main' className="module_container">
    <h1>PRODUCT OVERVIEW WIDGET</h1>
    <div className='top01'>
      <div className='left02'>
        <div className='thumbnails_po'>
          <div className='thumbnail_po'></div>
          <div className='thumbnail_po'></div>
          <div className='thumbnail_po'></div>
          <div className='thumbnail_po'></div>
          <div className='thumbnail_po'></div>
        </div>
        <div className='arrow_po'>
          <div className='arrow_space_po'></div>
          L
          <div className='arrow_space_po'></div>
        </div>
        <div className='space01_po'>Image Gallery</div>
        <div className='arrow_po'>
          <div className='arrow_space_po'>
            <div className='fullscreen_po'></div>
          </div>
          R
          <div className='arrow_space_po'></div>
          </div>
        </div>
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