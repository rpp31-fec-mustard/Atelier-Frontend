import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '59553',
      product: {}
    };
  }

  componentDidMount() {
    this.getProductId();
  }

  getProductId() {
    axios.get('/product', {
      params: {
        productId: this.state.productId
      }
    })
      .then((res) => {
        // console.log('@client res:', res.data);
        this.setState({product: res.data});
      })
      .catch((err) => {
        console.log('Error retrieving product/all: ', err);
      });
  }


  render () {
    return (
      <div id="index">
        <TempTopBanner />
        <ProductOverview product={this.state.product}/>
        <Related product={this.state.productId}/>
        <QA product={this.state.productId}/>
        <Reviews product={this.state.productId} />
      </div>
    );
  }
}

export default App;