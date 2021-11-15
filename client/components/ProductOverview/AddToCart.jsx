/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SelectSizeMenu from './StyleCartSubs/SelectSizeMenu.jsx';
import SelectQuantityMenu from './StyleCartSubs/SelectQuantityMenu.jsx';
import {DEBUG} from './ProductOverview.jsx';


const AddtoCart = ({style}) => {

  const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  mlog(logC + ' ATC style', style);
  // mlog(logC + ' ATC skus', style.skus);

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  mlog(logC + ' ATC size', size);


  const handleSetSize = async (event) => {
    mlog(logC + ' ATC handler size', event.target.value);
    mlog(logC + ' ATC handler', event.target);
    mlog(logC + ' ATC handler sku', $('.size_select_po option:selected').attr('sku'));
    let sku = $('.size_select_po option:selected').attr('sku');
    // mlog(logC + ' ATC handler sku', sku);
    if (sku === undefined) {
      document.getElementById('menu2_po').selectedIndex = 0;
    } else {
      mlog(logC + ' ATC handler quantity', style.skus[sku].quantity);
      await setSize(event.target.value);
      setQuantity(style.skus[sku].quantity);
      document.getElementById('menu2_po').selectedIndex = 1;
    }

  };

  useEffect(() => {
    mlog(logC + ' ATC state', size, quantity);
    setQuantity(0);
  }, [style, size]);


  //disable flag
  //when quantity is zero, disable
  //when select size, disable


  return (
    <div className='add_to_bag_po'>
      <div className='add_to_bag_top_po'>
        <SelectSizeMenu skus={style.skus} handleSetSize={handleSetSize}/>
        <div className='dropdown_space_po'>
        </div>
        <SelectQuantityMenu size={size} quantity={quantity}/>
      </div>
      <div className='add_to_bag_bottom_po'>
        <button className='add_to_bag_button_po'>add to bag</button>
        <div className='dropdown_space_po'>
        </div>
        <button className='favorites_add_button_po'>star</button>
      </div>
    </div> );
};

export default AddtoCart;

