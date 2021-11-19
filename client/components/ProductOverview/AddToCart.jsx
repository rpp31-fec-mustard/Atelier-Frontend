/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
import $ from 'jquery';

import SelectSizeMenu from './StyleCartSubs/SelectSizeMenu.jsx';
import SelectQuantityMenu from './StyleCartSubs/SelectQuantityMenu.jsx';
import {DEBUG} from './ProductOverview.jsx';


const AddtoCart = ({style, toggleToOutfitList}) => {

  // const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  mlog(logC + ' ATC style', style);
  // mlog(logC + ' ATC skus', style.skus);

  const [size, setSize] = useState('');
  const [quantityMax, setQuantityMax] = useState(null);
  const [quantityAdd, setQuantityAdd] = useState(1);
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
      mlog(logC + ' ATC handler quantityMax', style.skus[sku].quantityMax);
      await setSize(event.target.value);
      setQuantityMax(style.skus[sku].quantityMax);
      document.getElementById('menu2_po').selectedIndex = 1;
    }

  };

  useEffect(() => {
    mlog(logC + ' ATC state', size, quantityMax);
    setQuantityMax(null);
  }, [style, size]);


  //disable flag
  //when quantityMax is zero, disable
  //when select size, disable

  const handleSetAddQty = async (event) => {
    await setQuantityAdd(event.target.value);
  };


  const addToCart = () => {
    mlog(logC + 'ATC Add to Cart', style.style_id, size, quantityAdd);
  };


  //get productlist and compare to product id
  //if true,
    //light button
  //else off


  return (
    <div className='add_to_bag_po'>
      <div className='add_to_bag_top_po'>
        <SelectSizeMenu skus={style.skus} handleSetSize={handleSetSize}/>
        <div className='dropdown_space_po'>
        </div>
        <SelectQuantityMenu size={size}
          quantityMax={quantityMax}
          handleSetAddQty={handleSetAddQty}/>
      </div>
      <div className='add_to_bag_bottom_po'>
        <div className='add_to_bag_bottom_left_po'>
          {(()=>{
            if (!(_.every(style.skus, (sku) => {
              return sku.quantity === 0;
            }))) {
              return ( <button className='add_to_bag_button_po'
                onClick={addToCart}>add to bag</button>);
            }
          })()
          }
        </div>
        <div className='dropdown_space_po'>
        </div>
        <button className='favorites_add_button_po' onClick={toggleToOutfitList}>star</button>
      </div>
    </div> );
};

export default AddtoCart;

