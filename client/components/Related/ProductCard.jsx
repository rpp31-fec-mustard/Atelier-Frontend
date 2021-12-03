import * as React from 'react';
import { useTracking } from 'react-tracking';

import ActionButton from './ActionButton.jsx';
import ProductComparison from './Comparison.jsx';
import Price from '../Global/Price.jsx';
import Stars from '../Global/Stars.jsx';

const ProductCard = (props) => {
  const { trackEvent } = useTracking();
  const [{ isHovering, x, y }, setHoverState] = React.useState({
    isHovering: false,
    x: 0,
    y: 0,
  });
  const cardRef = React.useRef(null);

  // setting image in cases of null image
  let image = props.product.thumbnailUrl ? (
    <img
      src={props.product.thumbnailUrl}
      className="prod-card-img"
      alt={props.product.name}
      loading="lazy"
    ></img>
  ) : (
    <div className="prod-card-no-img">No image</div>
  );

  //dark mode
  let darkModeClass1 = props.darkMode ? 'dm' : '';

  return (
    <React.Fragment>
      <div
        ref={cardRef}
        className={`prod-card ${props.product.id}`}
        onMouseEnter={(event) => {
          const x = cardRef.current.getBoundingClientRect().x;
          const y = cardRef.current.getBoundingClientRect().y;
          setHoverState({ x, y, isHovering: true });
        }}
        onMouseLeave={(event) => {
          setHoverState({ isHovering: false });
        }}
      >
        <ActionButton
          product={props.product}
          handleAction={props.handleAction}
          outfitList={props.outfitList}
        />

        <div className="prod-card-wrapper">
          <button
            // className={props.product.id}
            className={darkModeClass1}  //switched for dark mode
            id={props.product.id}  //added for dark mode
            onClick={(event) => {
              props.renderRelated(event);
              trackEvent({
                time: new Date().toString(),
                element: JSON.stringify({
                  productId: props.product.id,
                  className: 'product-card-wrapper'
                }),
                widget: 'Related Items & Comparison'
              });
            }}
            aria-label={`${props.product.name}`}
          >
            <div className="prod-card-img-wrapper">{image}</div>
            <div className="prod-card-info-wrapper">
              <div className="prod-card-category">{props.product.category}</div>
              <div className="prod-card-name">{props.product.name}</div>
              <Price
                originalPrice={props.product.originalPrice}
                salePrice={props.product.salePrice}
              />
              <div className="prod-card-rating">
                <Stars productId={props.product.id} />
              </div>
            </div>
          </button>
        </div>
      </div>

      {isHovering && !props.outfit && (
        <ProductComparison
          currentProduct={props.product}
          homeProduct={props.homeProduct}
          position={{x, y}}
        />
      )}
    </React.Fragment>
  );
};

export default ProductCard;