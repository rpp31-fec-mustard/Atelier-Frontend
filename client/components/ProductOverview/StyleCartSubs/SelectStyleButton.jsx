/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React from 'react';
import ReactDOM from 'react-dom';
import {DEBUG} from '../ProductOverview.jsx';


const SelectStyleButton = ({skus}) => {

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
    XXL: 'xx-large'
  };



  return (
    <React.Fragment>
      <select name='size' className='size_select_po'>
        <option value=''>Select Size</option>
        {
          skuList.map((sku)=> {
            const size = skus[sku].size;
            mlog(logC + ' size test', sizeTable[size]);

            return (
              <option value={skus[sku].size} sku={sku}>{sizeTable[size]}</option>
            );

          })
        }

      </select>
    </React.Fragment>
  );
};

export default SelectStyleButton;