/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import SelectSizeMenu from './StyleCartSubs/SelectSizeMenu.jsx';
import SelectQuantityMenu from './StyleCartSubs/SelectQuantityMenu.jsx';
import AddOutfitListButton from './StyleCartSubs/AddOutfitListButton.jsx';
import AddCartButton from './StyleCartSubs/AddCartButton.jsx';
import Cart from './StyleCartSubs/Cart.jsx';

const AddtoCart = ({style, toggleProductToOutfitList, productId, isProductInOutfitList, darkMode}) => {
  const [size, setSize] = useState('Select Size');
  const [quantityMax, setQuantityMax] = useState(0);
  const [quantityAdd, setQuantityAdd] = useState(1);
  const [skus, setSkus] = useState(style.skus);
  const [showAlert, setShowAlert] = useState(false);
  const [order, setOrder] = useState('');

  const handleSetSize = (event) => {

    let sku = event.target.getAttribute('sku');
    setSize(event.target.textContent);
    setQuantityMax(style.skus[sku].quantity);
    setQuantityAdd(1);
  };

  useEffect(() => {
    setSkus(style.skus);
    setSize('Select Size');
    setQuantityMax(0);
    setShowAlert(false);
  }, [style]);

  const handleSetAddQty = (event) => {
    setQuantityAdd(event.target.getAttribute('value'));
  };

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

  const addToCart = async () => {
    if (size === 'Select Size') {
      setShowAlert(true);
      setShowSizeMenuTrue();
    } else {
      console.log('ATC Add to Cart', style.style_id, size, quantityAdd);
      await setOrder(`${style.style_id} ${size} ${quantityAdd}`);
      setOrder('');
    }
  };

  let outfitButtonLabel = isProductInOutfitList ? 'Remove' : 'Star';

  return (
    <div className='add_to_bag_po'>
      <div className='add_to_bag_top_po'>
        <SelectSizeMenu skus={skus} size={size} showAlert={showAlert}
          setShowAlertFalse={setShowAlertFalse}
          setShowSizeMenuTrue={setShowSizeMenuTrue}
          handleSetSize={handleSetSize}
          darkMode={darkMode}/>
        <SelectQuantityMenu size={size}
          quantityMax={quantityMax}
          quantityAdd={quantityAdd}
          handleSetAddQty={handleSetAddQty}
          darkMode={darkMode}/>
      </div>
      <div className='size_alert_po'>Please select size</div>
      <div className='add_to_bag_bottom_po'>
        <AddCartButton style={style} addToCart={addToCart} darkMode={darkMode}/>

        <div className='dropdown_space_po'>
        </div>
        <AddOutfitListButton toggleProductToOutfitList={toggleProductToOutfitList}
          isProductInOutfitList={isProductInOutfitList} darkMode={darkMode}/>
        <Cart order={order} style={style} addToCart={addToCart}/>
      </div>
    </div> );
};

export default AddtoCart;


//put in journal
//event.target.getAttribute('')
//event.target.textContent