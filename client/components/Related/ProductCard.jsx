import React from "react";
import StarButton from "./StarButton.jsx";
import XButton from "./XButton.jsx";

const ProductCard = (props) => {
  let actionButton;

  if (props.action === "star") {
    actionButton = <StarButton handleStar={props.handleStar} starred={true} />;
  } else {
    actionButton = <XButton />;
  }

  return (
    <div className={`prod-card ${props.id}`}>
      <img src={props.image}></img>
      <div>{props.category}</div>
      <div>{props.name}</div>
      <div>${props.price}</div>
      <div>{props.rating}</div>
      {actionButton}
    </div>
  );
};

export default ProductCard;
