
import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import {DEBUG} from '../ProductOverview.jsx';

//can remove size in production
const SelectQuantityMenu = ({quantityMax, size, quantityAdd, handleSetAddQty}) => {

  const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[36m';

  mlog(logC + ' SQM ', quantityMax, size);

  const [showQuantity, setShowQuantity] = useState(false);

  const handleSelectQuantityClick = () => {
    mlog(logC + ' SQM select qty clicked');
    showQuantity ? setShowQuantity(false) : setShowQuantity(true)
  }

  const handleMouseExitCloseMenu = () => {
    showQuantity ? setShowQuantity(false) : setShowQuantity(true)
}

  const handleSetQuantityClick = (event) => {
    // console.log(event);
    // // // console.log('value', value);
    // console.log('sku', event.target.getAttribute('sku'));
    // console.log('size', event.target.getAttribute('value'));

    handleSetAddQty(event);
    handleSelectQuantityClick();
  }

  const handleMouseOverColorChange = (event) => {
    // console.log('mouseover')
    event.target.setAttribute('style', 'background:#FFDB58');
  }
  const handleMouseExitColorChange = (event) => {
    // console.log('mouseover')
    event.target.setAttribute('style', 'background:white');
  }




  let max = parseInt(quantityMax < 15 ? quantityMax : 15);
  mlog(logC + ' SQM max', max);
  let qtyArray = [];
  for (let i = 1; i < max + 1; i++) {
    qtyArray.push(i);
  }
  if (quantityMax === 0) {
    return (
      <React.Fragment>

      <div>---</div>
      </React.Fragment>
      // <select name='qty' className='qty_select_po menu_po' id='menu2_po' disabled>
      //   <option value='' default>---</option>
      // </select>
      );
  } else if (!showQuantity) {
    return (
      <React.Fragment>
        <div className='quantity_menu_po'>
          <div className='quantity_display_po'
            onClick={handleSelectQuantityClick}>{quantityAdd}</div>
          </div>
        </React.Fragment>
    )


  } else {

    return (
<React.Fragment>
  <div className='quantity_menu_po' onMouseLeave={handleMouseExitCloseMenu}>
    <div className='quantity_display_po' onClick={handleSelectQuantityClick}>{quantityAdd}</div>
      {
        qtyArray.map((i) => {
        return (<div className='quantity_body_po' key={`A${i}`} value={i}
        onClick={handleSetQuantityClick}
        onMouseOver={handleMouseOverColorChange}
        onMouseLeave={handleMouseExitColorChange}>{i}</div>);
      })
    }
    </div>
  </React.Fragment>
      // <select name='qty'
      //   className='qty_select_po menu_po'
      //   id='menu2_po'
      //   onChange={handleSetAddQty} >
      //   <option value='' default>---</option>
      //   {
        //     qtyArray.map((i) => {
          //       return (<option key={`A${i}`} value={i}>{i}</option>);
          //     })
          //   }
          // </select>
          );
  }
};

export default SelectQuantityMenu;

