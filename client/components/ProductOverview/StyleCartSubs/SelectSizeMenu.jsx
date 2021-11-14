/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
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

  // useEffect(() => {

  // }, [skus]);



  //render
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
        <select name='size' className='size_select_po' onChange={handleSetSize}>
          <option value=''>Select Size</option>
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