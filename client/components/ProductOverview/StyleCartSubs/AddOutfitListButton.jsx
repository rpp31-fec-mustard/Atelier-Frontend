import React, {useState, useEffect} from 'react';


const AddOutfitListButton = ({toggleProductToOutfitList, isProductInOutfitList, darkMode}) => {

  let starIcon = <i className="ri-star-line"></i>;
  let favoriteStatus = isProductInOutfitList ? 'favorites_on_po' : 'favorites_off_po';

  let darkModeClassMenu = darkMode ? 'dmSB' : '';

  return (
    <React.Fragment>
      <div className={`favorites_add_button_po ${favoriteStatus} ${darkModeClassMenu}`}
        onClick={toggleProductToOutfitList}>
        {starIcon}
      </div>
    </React.Fragment>
  );
};

export default AddOutfitListButton;
