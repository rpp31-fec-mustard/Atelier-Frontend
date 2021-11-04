import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import {ProductOverview} from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '59553',
      product: {},
      styles: {},
      randomizerCb: this.randomizerCb.bind(this)
    };
  }


  randomizerCb(id) {
    // console.log('id :', id);
    new Promise((resolve, notResolve) => {
      this.setState({productId: id});
      resolve();
    })
      .then(() => {
        this.getProductId(this.state.productId);
      })
      .catch(error => {
        console.log(error);
      });
  }


  componentDidMount() {
    this.getProductId(this.state.productId);
    // this.getProductStyles(this.state.productId);
  }


  getProductId(id) {
    axios.get('/product', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        this.setState({product: res.data});
      })
      .catch((error) => {
        console.log('Error retrieving product/all: ', error);
      });
  }




  render () {
    return (
      <div id="index">
        <TempTopBanner randomizerCb={this.state.randomizerCb}/>
        <ProductOverview product={this.state.product} styles={this.state.styles} id={this.state.productId}/>
        <Related key={this.state.productId} product={this.state.productId}/>
        <QA product={this.state.productId}/>
        <Reviews product={this.state.productId} />
      </div>
    );
  }
}

export default App;
