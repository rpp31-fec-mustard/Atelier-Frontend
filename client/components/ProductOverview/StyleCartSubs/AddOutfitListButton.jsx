import React, {useState, useEffect} from 'react';


const AddOutfitListButton = ({toggleProductToOutfitList, isProductInOutfitList}) => {

  let starIcon = <i className="ri-star-line"></i>;
  let favoriteStatus = isProductInOutfitList ? 'favorites_on_po' : 'favorites_off_po';

  return (
    <React.Fragment>
      <div className={`favorites_add_button_po ${favoriteStatus}`}
        onClick={toggleProductToOutfitList}>
        {starIcon}
      </div>
    </React.Fragment>
  );
};

export default AddOutfitListButton;






// category:
// defaultPrices:
// features: [],
// id:
// name:
// originalPrice:
// salePrice:
// starred: true,
// thumbnailUrl:


//every reload will check to see if product is on outfit list

//onClick, send data to outfit list via callback
