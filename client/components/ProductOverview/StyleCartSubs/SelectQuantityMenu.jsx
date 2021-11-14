
import React from 'react';
// import ReactDOM from 'react-dom';
import {DEBUG} from '../ProductOverview.jsx';


const SelectQuantityMenu = ({size, quantity}) => {

  // const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[36m';

  mlog(logC + ' SQM ', size, quantity);


  let max = quantity < 15 ? quantity : 15;
  mlog(logC + ' SQM max', max);
  let qtyArray = [];
  for (let i = 1; i < max + 1; i++) {
    qtyArray.push(i);
  }

  return (
    <select name='qty' className='qty_select_po menu_po' id='menu2_po'>
      <option value='' default>---</option>
      {
        qtyArray.map((i) => {
          return (<option key={`A${i}`} value={i}>{i}</option>);
        })
      }
    </select>
  );
};

export default SelectQuantityMenu;

