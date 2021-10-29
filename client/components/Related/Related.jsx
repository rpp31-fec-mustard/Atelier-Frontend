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
    let target = event.target.firstElementChild;
    if (event.target.tagName === "I") {
      target = event.target;
    }
    const productId = target.parentElement.parentElement.parentElement.classList[1];
    if (target.className === "far fa-star") {
      // check that this id doesn't already exist in oufitList
      let outfitExists = false;
      if (outfitList.length) {
        for (let i = 0; i < outfitList.length; i++) {
          const outfitProduct = outfitList[i];
          if (outfitProduct.id.toString(10) === productId) {
            outfitExists = !outfitExists;
          }
        }
      }

      if (!outfitExists || outfitList.length === 0) {
        // if star is empty when clicked, add to outfit list
        for (let i = 0; i < relatedProducts.length; i++) {
          const product = relatedProducts[i];
          if (product.id.toString(10) === productId) {
            setOutfitList(outfitList.concat([product]));
          }
        }
      }
    } else {
      // else remove from outfit list
      for (let i = 0; i < outfitList.length; i++) {
        // const outfitProduct = outfitList[i];
        // if (outfitProduct.id.toString(10) === productId) {
        //   const newOutfitList = outfitList.splice(i, 1);
        //   setOutfitList(newOutfitList);
        // }
      }
    }
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
