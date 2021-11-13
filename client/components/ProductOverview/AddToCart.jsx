/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React from 'react';
import ReactDOM from 'react-dom';
import SelectStyleButton from './StyleCartSubs/SelectStyleButton.jsx';
import {DEBUG} from './ProductOverview.jsx';


const AddtoCart = ({style}) => {

  const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  mlog(logC + ' ATC styles', style);
  // mlog(logC + ' ATC skus', style.skus);





  return (
    <div className='add_to_bag_po'>
      <div className='add_to_bag_top_po'>
        {/* <div className='dropdown_po'> */}
        <SelectStyleButton skus={style.skus} />
        <div className='dropdown_space_po'>
        </div>

        <select name='qty' className='qty_select_po'>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
          <option value=''>4</option>
          <option value=''>5</option>
        </select>

      </div>
      {/* </div> */}
      <div className='add_to_bag_bottom_po'>
        <button className='add_to_bag_button_po'>add to bag</button>
        <div className='dropdown_space_po'>
        </div>
        <button className='favorites_add_button_po'>star</button>
      </div>
    </div> );
};

export default AddtoCart;