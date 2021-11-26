/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
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

  const [size, setSize] = useState('Select Size');
  const [quantityMax, setQuantityMax] = useState(0);
  const [quantityAdd, setQuantityAdd] = useState(1);
  const [skus, setSkus] = useState(style.skus);
  mlog(logC + ' ATC size', size);


  const handleSetSize = (event) => {
    mlog(logC + ' ATC handler', event.target);
    mlog(logC + ' ATC handler size', event.target.getAttribute('value'));
    mlog(logC + ' ATC handler name', event.target.textContent);
    mlog(logC + ' ATC handler sku', event.target.getAttribute('sku'));

    let sku = event.target.getAttribute('sku');
    mlog(logC + ' ATC handler sku 2', sku);
    // if (sku === undefined) {
    //   document.getElementById('menu2_po').selectedIndex = 0;
    // } else {
    // }
    mlog(logC + ' ATC handler quantityMax before', style.skus[sku].quantity);
    setSize(event.target.textContent);

    setQuantityMax(style.skus[sku].quantity);
    mlog(logC + ' ATC handler quantityMax after', style.skus[sku].quantity);
    setQuantityAdd(1);
      // document.getElementById('menu2_po').selectedIndex = 1;

  };

  //on selecting new style
  useEffect(() => {
    mlog(logC + ' ATC state', size, quantityMax);
    setSkus(style.skus);
    setSize('Select Size');
    setQuantityMax(0);
    setShowAlert(false);
  }, [style]);


  //disable flag
  //when quantityMax is zero, disable
  //when select size, disable

  const handleSetAddQty = (event) => {
    setQuantityAdd(event.target.getAttribute('value'));
  };

  const [showAlert, setShowAlert] = useState(false);

  const setShowSizeMenuTrue = () => {
    setShowAlert(true);
  };

  const setShowAlertFalse = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      document.getElementsByClassName('size_alert_po')[0].style.visibility = 'visible';
    } else {
      document.getElementsByClassName('size_alert_po')[0].style.visibility = 'hidden';
    }
  }, [showAlert]);

  const addToCart = () => {
    if (size === 'Select Size') {
      // document.getElementsByClassName('size_alert_po')[0].style.visibility = 'visible';
      setShowAlert(true);
      setShowSizeMenuTrue();
    } else {
      mlog(logC + 'ATC Add to Cart', style.style_id, size, quantityAdd);
    }
  };


  return (
    <div className='add_to_bag_po'>
      <div className='add_to_bag_top_po'>
        <SelectSizeMenu skus={skus} size={size} showAlert={showAlert}
          setShowAlertFalse={setShowAlertFalse}
          setShowSizeMenuTrue={setShowSizeMenuTrue}
          handleSetSize={handleSetSize}/>
        {/* <div className='dropdown_space_po'>
        </div> */}
        <SelectQuantityMenu size={size}
          quantityMax={quantityMax}
          quantityAdd={quantityAdd}
          handleSetAddQty={handleSetAddQty}/>
      </div>
      <div className='size_alert_po'>select a size</div>
      <div className='add_to_bag_bottom_po'>
        {(()=>{
          if (!(_.every(style.skus, (sku) => {
            return sku.quantity === 0;
          }))) {
            return ( <button className='add_to_bag_button_po'
              onClick={addToCart}>add to bag</button>);
          }
        })()
        }

        <button className='favorites_add_button_po'>star</button>
      </div>
    </div> );
};

export default AddtoCart;


//put in journal
//event.target.getAttribute('')
//event.target.textContent