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
    console.log('id :', id);
    new Promise((works, busted) => {
      this.setState({productId: id});
      works();
    })
      .then(() => {
        this.getProductId(this.state.productId);
        this.getProductStyles(this.state.productId);
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
        console.log('@client res product:', res.data);
        this.setState({product: res.data});
        console.log('prodcut after getproduct:', this.state.product);
      })
      .catch((err) => {
        console.log('Error retrieving product/all: ', err);
      });
  }


  getProductStyles(id) {
    // console.log('this.props.product.id :', id);
    axios.get('/product/styles', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        console.log('@client res product/styles:', res.data);
        this.setState({styles: res.data});
      })
      .catch((err) => {
        console.log('Error retrieving product/styles: ', err);
      });
  }


  render () {
    return (
      <div id="index">
        <TempTopBanner randomizer={this.state.randomizer}/>
        <ProductOverview product={this.state.product} styles={this.state.styles}/>
        <Related product={this.state.productId}/>
        <QA key={this.state.productId} product={this.state.productId} productInfo={this.state.product}/>
        <Reviews product={this.state.productId} />
      </div>
    );
  }
}

export default App;
