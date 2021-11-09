import React, { useState } from 'react';
import ActionButton from './ActionButton.jsx';
import ProductComparison from './Comparison.jsx';
import Price from '../Global/Price.jsx';
import Stars from '../Global/Stars.jsx';

const ProductCard = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  // setting image in cases of null image
  let image = props.product.thumbnailUrl ? (
    <img src={props.product.thumbnailUrl} className="prod-card-img" alt={props.product.name}></img>
  ) : (
    <div className="prod-card-no-img">No image</div>
  );

  return (
    <div
      className={`prod-card ${props.product.id}`}
      onMouseEnter={() => { setIsHovering(true); }}
      onMouseLeave={() => { setIsHovering(false); }}
    >
      <div style={{position: 'absolute'}}>
        <div className="prod-comparison-container">
          {isHovering && !props.outfit && <ProductComparison currentProduct={props.product} homeProduct={props.homeProduct}/>}
        </div>
      </div>
      <ActionButton product={props.product} handleAction={props.handleAction} />
      <div className="prod-card-wrapper">
        <button className ={props.product.id} onClick={(event) => { props.renderRelated(event); }}>
          <div className="prod-card-img-wrapper">{image}</div>
          <div className="prod-card-info-wrapper">
            <div className="prod-card-category">{props.product.category}</div>
            <div className="prod-card-name">{props.product.name}</div>
            <Price originalPrice={props.product.originalPrice} salePrice={props.product.salePrice}/>
            <div className="rating"><Stars productId={props.product.id}/></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
