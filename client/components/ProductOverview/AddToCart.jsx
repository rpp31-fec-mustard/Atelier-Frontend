import React from 'react';
import ReactDOM from 'react-dom';

const AddtoCart = () => (

  <div className='add_to_bag_po'>
    <div className='add_to_bag_top_po'>
      <div className='dropdown'>
        <select name='size' id='size-select'>
          <option value=''>Select Size</option>
          <option value=''>Small</option>
          <option value=''>Medium</option>
          <option value=''>Large</option>
          <option value=''>X-Large</option>
        </select>
        <select name='qty' id='qty-select'>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
          <option value=''>4</option>
          <option value=''>5</option>
        </select>
      </div>
    </div>
    <div className='add_to_bag_bottom_po'>
      <div>add to bag</div>
      <div>star</div>
    </div>



  </div>
);

export default AddtoCart;

{/* <div className='dropdown'>
<button className='dropbtn'>select size</button>
<div id='size_dropdown' className='content_dropdown'>
  <p>small</p>
  <p>medium</p>
  <p>large</p>
</div>
</div> */}