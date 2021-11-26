/*eslint indent: ["error", 2, {"ignoreComments":true}]*/

import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
import $ from 'jquery';
import {DEBUG} from '../ProductOverview.jsx';


const SelectSizeMenu = ({skus, size, handleSetSize}) => {

  var DEBUG = true;
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
      // mlog(logC + 'SSM ', document.getElementById('menu1_po'));
      // document.getElementById('menu1_po').selectedIndex = 0;


      // document.getElementById('menu2_po').selectedIndex = 0;
    } else {
      mlog(logC + 'SSM  SKIP ON LOAD');
      loaded.current = true;
    }
  }, [skus]);


  const [sizeDisplay, setSizeDisplay] = useState('Select Size');
  const [showSizes, setShowSizes] = useState(false);

  const handleSelectSizeClick = () => {
    mlog(logC + ' SSM select size clicked');
    showSizes ? setShowSizes(false) : setShowSizes(true)
  }

  const handleMouseExitCloseMenu = () => {
      showSizes ? setShowSizes(false) : setShowSizes(true)
  }


  const handleSetSizeClick = (event) => {
    // console.log(event);
    // // // console.log('value', value);
    // console.log('sku', event.target.getAttribute('sku'));
    // console.log('size', event.target.getAttribute('value'));

    handleSetSize(event);
    handleSelectSizeClick();
  }
  // useEffect(() => {
  //   if (showSizes) {
  //     document.getElementsByClassName('size_box')[0].style.visibility = 'visible'
  //   } else {
  //     document.getElementsByClassName('size_box')[0].style.visibility = 'hidden'
  //   }


  // }, [showSizes]);
  const handleMouseOverColorChange = (event) => {
    // console.log('mouseover')
    event.target.setAttribute('style', 'background:#FFDB58; color:black');
    // event.target.setAttribute('style', 'color:black');
  }
  const handleMouseExitColorChange = (event) => {
    // console.log('mouseover')
    event.target.setAttribute('style', 'background:gray; color:white');
    // event.target.setAttribute('style', 'color:white');
  }



  //render component
  //if every sku quantity is 0
  if (_.every(skus, (sku) => {
    return sku.quantity === 0;
  })) {
    return (
      // <React.Fragment>
      //   <select className='size_select_po' id='menu1_po'>
      //     <option>OUT OF STOCK</option>
      //   </select>
      // </React.Fragment>
      <React.Fragment>
      <div className='size_menu_po'>
      <div className='out_of_stock_po'>OUT OF STOCK</div>
      </div>
      </React.Fragment>
    );
  } else if (!showSizes){
    return (
    <React.Fragment>
    <div className='size_menu_po'>
      <div className='size_display_po'
        onClick={handleSelectSizeClick}>{size}</div>
    </div>
      </React.Fragment> )
  } else {
    return (
      <React.Fragment>
        <div className='size_menu_po'
        onMouseLeave={handleMouseExitCloseMenu}
        >
          <div className='size_display_po' size={'Select Size'} onClick={handleSelectSizeClick}>{size}</div>
          {/* <div className='size_box'> */}
          {
            skuList.map((sku)=> {
              if (skus[sku].quantity > 0) {
                const size = skus[sku].size;
                mlog(logC + 'SSM  size test', sizeTable[size]);


                  let sizeString = sizeTable[size] ? sizeTable[size] : size;
                  console.log(sizeString)

                  return (
                    <div className='size_body_po' key={sku.toString()} value={skus[sku].size}
                    sku={sku} size={sizeString} onClick={handleSetSizeClick}
                    onMouseOver={handleMouseOverColorChange}
                    onMouseLeave={handleMouseExitColorChange}
                    // style={{background:'white'}}
                    >{sizeString}</div>
                  );





                }
              })
            }
          {/* </div> */}
            </div>
      </React.Fragment>

    );
  }
};

export default SelectSizeMenu;


// how to disable menu

//put in journal
//different ways to set css attributes