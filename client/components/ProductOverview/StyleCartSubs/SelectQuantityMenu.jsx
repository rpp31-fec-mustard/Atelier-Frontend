
import React from 'react';
// import ReactDOM from 'react-dom';
import {DEBUG} from '../ProductOverview.jsx';

//can remove size in production
const SelectQuantityMenu = ({quantityMax, size, handleSetAddQty}) => {

  // const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[36m';

  mlog(logC + ' SQM ', quantityMax, size);





  let max = quantityMax < 15 ? quantityMax : 15;
  mlog(logC + ' SQM max', max);
  let qtyArray = [];
  for (let i = 1; i < max + 1; i++) {
    qtyArray.push(i);
  }
  if (quantityMax === 0) {
    return (
      <select name='qty' className='qty_select_po menu_po' id='menu2_po' disabled>
        <option value='' default>---</option>
      </select> );
  } else {



    return (
      <select name='qty'
        className='qty_select_po menu_po'
        id='menu2_po'
        onChange={handleSetAddQty} >
        <option value='' default>---</option>
        {
          qtyArray.map((i) => {
            return (<option key={`A${i}`} value={i}>{i}</option>);
          })
        }
      </select>
    );
  }
};

export default SelectQuantityMenu;

