/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
import $ from 'jquery';
import {DEBUG} from '../ProductOverview.jsx';


const SelectSizeMenu = ({skus, handleSetSize}) => {

  // var DEBUG = false;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  mlog(logC + ' SSM skus', skus);

  let skuList = Object.keys(skus).sort();
  mlog(logC + ' SSM skuList', skuList);

  const sizeTable = {
    XS: 'x-small',
    S: 'small',
    M: 'medium',
    L: 'large',
    XL: 'x-large',
    XXL: 'xx-large',
    'One Size': 'One Size'
  };


  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) {
      mlog(logC + 'SSM  RESET SELECT SIZE');
      mlog(logC + 'SSM ', document.getElementById('menu1_po'));
      document.getElementById('menu1_po').selectedIndex = 0;
      document.getElementById('menu2_po').selectedIndex = 0;
    } else {
      mlog(logC + 'SSM  SKIP ON LOAD');
      loaded.current = true;
    }
  }, [skus]);




  //render component
  //if every sku quantity is 0
  if (_.every(skus, (sku) => {
    return sku.quantity === 0;
  })) {
    return (
      <React.Fragment>
        <select className='size_select_po' id='menu1_po'>
          <option>OUT OF STOCK</option>
        </select>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <select name='size' className='size_select_po' id='menu1_po' onChange={handleSetSize}>
          <option value='no_selection'>Select Size</option>
          {
            skuList.map((sku)=> {
              if (skus[sku].quantity > 0) {
                const size = skus[sku].size;
                mlog(logC + 'SSM  size test', sizeTable[size]);
                return (
                  <option key={sku.toString()} value={skus[sku].size} sku={sku}>{sizeTable[size] ? sizeTable[size] : size }</option>
                );
              }
            })
          }
        </select>
      </React.Fragment>
    );
  }
};

export default SelectSizeMenu;



// how to disable menu