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
      product: {},
      styles: {},
      randomizer: this.randomizer.bind(this)
    };
  }


  randomizer(id) {
    // console.log('id :', id);
    new Promise((works, busted) => {
      this.setState({productId: id});
      works();
    })
      .then(() => {
        this.getProductId(this.state.productId);
        this.getProductStyles(this.state.productId);
      })
      .catch((error) => {
        console.log('Randomizer not working: ', error);
      });
  }


  componentDidMount() {
    this.getProductId(this.state.productId);
    this.getProductStyles(this.state.productId);
  }


  getProductId(id) {
    axios.get('/product', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        this.setState({product: res.data});
        console.log('prodcut after getproduct:', this.state.product);
      })
      .catch((error) => {
        console.log('Error retrieving product/all: ', error);
      });
  }


  getProductStyles(id) {
    axios.get('/product/styles', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        // console.log('@client res product/styles:', res.data);
        this.setState({styles: res.data});
      })
      .catch((error) => {
        console.log('Error retrieving product/styles: ', error);
      });
  }

  render () {
    return (
      <div id="index">
        <TempTopBanner randomizer={this.state.randomizer}/>
        <ProductOverview product={this.state.product} styles={this.state.styles}/>
        <Related key={this.state.productId} product={this.state.productId}/>
        <QA key={this.state.productId} product={this.state.productId} productInfo={this.state.product}/>
        <Reviews key={this.state.productId + 1} product={this.state.productId} />
      </div>
    );
  }
}

export default App;
