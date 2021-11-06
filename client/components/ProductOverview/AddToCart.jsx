import React from 'react';
import ReactDOM from 'react-dom';

const AddtoCart = () => (

  <div className='add_to_bag_po'>
    <div className='add_to_bag_top_po'>
      <div className='dropdown'>
        <select name='size' className='size_select'>
          <option value=''>Select Size</option>
          <option value=''>Small</option>
          <option value=''>Medium</option>
          <option value=''>Large</option>
          <option value=''>X-Large</option>
        </select>
        <select name='qty' className='qty_select'>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
          <option value=''>4</option>
          <option value=''>5</option>
        </select>
      </div>
    </div>
    <div className='add_to_bag_bottom_po'>
      <button className='add_to_bag_button_po'>add to bag</button>
      <button className='favorites_add_button_po'>star</button>
    </div>



  </div>
);

export default AddtoCart;