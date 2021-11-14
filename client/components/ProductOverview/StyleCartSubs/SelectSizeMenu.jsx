/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
import $ from 'jquery';
import {DEBUG} from '../ProductOverview.jsx';


const SelectSizeMenu = ({skus, handleSetSize}) => {

  const DEBUG = true;
  var mlog = DEBUG ? console.log : () => {};
  var logC = '\x1b[35m';

  mlog(logC + ' ATC skus', skus);

  let skuList = Object.keys(skus).sort();
  mlog(logC + ' ATC skuList', skuList);

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
      mlog(logC + ' RESET SELECT SIZE');

      // console.log(document.getElementsByClassName('menu_po')) //.selectedIndex = 0;
      document.getElementById('menu1_po').selectedIndex = 0;
      document.getElementById('menu2_po').selectedIndex = 0;

        // this.selectedIndex = 0;
      // });
    } else {
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
        <select>
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
                mlog(logC + ' size test', sizeTable[size]);
                return (
                  <option value={skus[sku].size} sku={sku}>{sizeTable[size] ? sizeTable[size] : size }</option>
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