/*eslint indent: ["error", 2, {"ignoreComments":true}]*/
import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import _, { every } from 'underscore';
import $ from 'jquery';


const SelectSizeMenu = ({skus, size, showAlert, setShowAlertFalse, handleSetSize}) => {

  let skuList = Object.keys(skus).sort();

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
      // console.log('SSM  RESET SELECT SIZE');

    } else {
      //console.log('SSM  SKIP ON LOAD');
      loaded.current = true;
    }
  }, [skus]);


  const [sizeDisplay, setSizeDisplay] = useState('Select Size');
  const [showSizes, setShowSizes] = useState(false);

  const handleSelectSizeClick = () => {
    showSizes ? setShowSizes(false) : setShowSizes(true);
  };

  const handleMouseExitCloseMenu = () => {
    setShowSizes(false);
    setShowAlertFalse();
  };


  const handleSetSizeClick = (event) => {
    handleSetSize(event);
    handleSelectSizeClick();
    setShowAlertFalse();
  };


  const handleMouseOverColorChange = (event) => {
    event.target.setAttribute('style', 'background:#FFDB58; color:black');
  };
  const handleMouseExitColorChange = (event) => {
    event.target.setAttribute('style', 'background:gray; color:white');
  };

  // show menu if alert is up
  useEffect(() => {
    if (showAlert) {
      setShowSizes(true);
    } else {
      setShowSizes(false);
    }
  }, [showAlert]);


  //render component
  //if every sku quantity is 0
  if (_.every(skus, (sku) => {
    return sku.quantity === 0;
  })) {
    return (
      <React.Fragment>
        <div className='size_menu_po' style={{background: 'lightgrey'}}>
          <div className='out_of_stock_po'>OUT OF STOCK</div>
        </div>
      </React.Fragment>
    );
  } else if (!showSizes) {
    return (
      <React.Fragment>
        <div className='size_menu_po'>
          <div className='size_display_po'
            onClick={handleSelectSizeClick}>{size}</div>
        </div>
      </React.Fragment> );
  } else {
    return (
      <React.Fragment>
        <div className='size_menu_po'
          onMouseLeave={handleMouseExitCloseMenu}
        >
          <div className='size_display_po' size={'Select Size'} onClick={handleSelectSizeClick}>{size}</div>
          {
            skuList.map((sku)=> {
              if (skus[sku].quantity > 0) {
                const size = skus[sku].size;
                let sizeString = sizeTable[size] ? sizeTable[size] : size;
                return (
                  <div className='size_body_po' key={sku.toString()} value={skus[sku].size}
                    sku={sku} size={sizeString} onClick={handleSetSizeClick}
                    onMouseOver={handleMouseOverColorChange}
                    onMouseLeave={handleMouseExitColorChange}
                  >{sizeString}</div>
                );
              }
            })
          }
        </div>
      </React.Fragment>
    );
  }
};

export default SelectSizeMenu;
