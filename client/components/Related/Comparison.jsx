import React from 'react';

const hasMetric = (product, metric) => {
  for (let i = 0; i < product.features.length; i++) {
    const feature = product.features[i].feature;
    if (feature === metric) {
      return <i className="fas fa-check"></i>;
    } else {
      return <i className="fas fa-times"></i>;
    }

  }
};

const ProductComparison = (props) => {
  return (
    <div className="prod-comparison-wrapper">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Comparing</th>
          </tr>
          <tr>
            <th>{props.homeProduct.name}</th>
            <th></th>
            <th>{props.currentProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${props.homeProduct.default_price}</td>
            <td>Price</td>
            <td>${props.currentProduct.defaultPrice}</td>
          </tr>
          <tr>
            <td>{hasMetric(props.homeProduct, 'Green Leaf Certified')}</td>
            <td>Green Leaf Certified</td>
            <td>{hasMetric(props.currentProduct, 'Green Leaf Certified')}</td>
          </tr>
          <tr>
            <td>{hasMetric(props.homeProduct, 'Sustainably Sourced')}</td>
            <td>Sustainably Sourced</td>
            <td>{hasMetric(props.currentProduct, 'Sustainably Sourced')}</td>
          </tr>
          <tr>
            <td>{hasMetric(props.homeProduct, 'Fair Trade Certified')}</td>
            <td>Fair Trade Certified</td>
            <td>{hasMetric(props.currentProduct, 'Fair Trade Certified')}</td>
          </tr>
          <tr>
            <td>{hasMetric(props.homeProduct, 'Non-GMO')}</td>
            <td>Non-GMO</td>
            <td>{hasMetric(props.currentProduct, 'Non-GMO')}</td>
          </tr>
          <tr>
            <td>{hasMetric(props.homeProduct, '5 Year Warranty')}</td>
            <td>5 Year Warranty</td>
            <td>{hasMetric(props.homeProduct, '5 Year Warranty')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;