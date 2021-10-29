import React, { useState, useEffect } from "react";
import axios from "axios";

import RelatedProducts from "./RelatedProducts.jsx";
import YourOutfit from "./YourOutfit.jsx";

const Related = (props) => {
  const [productId, setProductId] = useState("59553");
  const [relatedProducts, setRelatedProducts] = useState([]);
  // [{productId, starred, category, name, price, rating}]
  const [outfitList, setOutfitList] = useState([]);
  // [{productId, category, name, price, rating}]

  useEffect(() => {
    axios.get("/related").then((result) => {
      setRelatedProducts(result.data);
    });
  }, []);

  function handleStar(event) {
    // fill in star
    // update outfit list with clicked on product info
    console.log("star clicked", event.target);
  }

  return (
    <div id="related_main" className="module_container">
      <RelatedProducts
        productId={productId}
        relatedProducts={relatedProducts}
        handleStar={handleStar}
      />
      <YourOutfit />
    </div>
  );
};

export default Related;
