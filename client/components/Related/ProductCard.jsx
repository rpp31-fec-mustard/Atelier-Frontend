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
      <ActionButton product={props.product} handleAction={props.handleAction} />
      <div className="prod-card-wrapper">
        <div className="prod-comparison-container">
          {isHovering && !props.outfit && <ProductComparison currentProduct={props.product} homeProduct={props.homeProduct}/>}
        </div>
        <a
          href="https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/?fullscreen"
          target="_blank"
        >
          <div className="prod-card-img-wrapper">{image}</div>
          <div className="prod-card-info-wrapper">
            <div className="prod-card-info category">{props.product.category}</div>
            <div className="prod-card-info name">{props.product.name}</div>
            <Price originalPrice={props.product.originalPrice} salePrice={props.product.salePrice}/>
            <div className="prod-card-info rating"><Stars productId={props.product.id}/></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
