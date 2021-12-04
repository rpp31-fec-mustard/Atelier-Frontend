import React, {useState, useEffect} from 'react';


//can remove size in production
const SelectQuantityMenu = ({quantityMax, size, quantityAdd, handleSetAddQty, darkMode}) => {

  const [showQuantity, setShowQuantity] = useState(false);

  const handleSelectQuantityClick = () => {
    showQuantity ? setShowQuantity(false) : setShowQuantity(true);
  };

  const handleMouseExitCloseMenu = () => {
    showQuantity ? setShowQuantity(false) : setShowQuantity(true);
  };

  const handleSetQuantityClick = (event) => {
    handleSetAddQty(event);
    handleSelectQuantityClick();
  };

  const handleMouseOverColorChange = (event) => {
    event.target.setAttribute('style', 'background:#FFDB58; color:black');
  };
  const handleMouseExitColorChange = (event) => {
    event.target.setAttribute('style', 'background:gray; color:white');
  };

  let max = parseInt(quantityMax < 15 ? quantityMax : 15);
  let qtyArray = [];
  for (let i = 1; i < max + 1; i++) {
    qtyArray.push(i);
  }

  let darkModeClassMenu = darkMode ? 'dmSB' : '';

  if (quantityMax === 0) {
    return (
      <React.Fragment>
        <div className='quantity_menu_po' style={{background: 'lightgrey'}}>
          <div className='quantity_display_po'>---</div>
        </div>
      </React.Fragment>
    );
  } else if (!showQuantity) {
    return (
      <React.Fragment>
        <div className={`quantity_menu_po ${darkModeClassMenu}`}>
          <div className='quantity_display_po'
            onClick={handleSelectQuantityClick}>{quantityAdd}</div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={`quantity_menu_po ${darkModeClassMenu}`} onMouseLeave={handleMouseExitCloseMenu}>
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
    );
  }
};

export default SelectQuantityMenu;
