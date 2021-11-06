import React from 'react';

const hasMetric = (product, metric) => {
  if (product.features.metric) {
    return <i className="fas fa-check"></i>;
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
            <td>1</td>
            <td>Green Leaf Certified</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sustainably Sourced</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Fair Trade Certified</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Non-GMO</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>5 Year Warranty</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;