/* eslint-disable camelcase */
/* eslint-disable func-style */
import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';
import defaultProduct from './defaultProduct.jsx';
import checkOutfitListPresence from './Global/checkOutfitListPresence.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '59553',
      product: defaultProduct.product,
      total: '0',
      outfitList: []
    };
    this.sendNumber = this.sendNumber.bind(this);
  }

  //! testing only
  sendNumber(id) {
    // console.log('app id :', id);
    new Promise((resolve, notResolve) => {
      this.setState({productId: id});
      resolve();
    })
      .then(() => {
        this.getProduct(this.state.productId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    // initialize product and productId from localStorage if exists
    if (localStorage.product) {
      const product = JSON.parse(localStorage.getItem('product'));
      this.setState({product});
      this.setState({productId: product.id});
    }

    // initialize outfitList as empty array if new user without localStorage
    if (!localStorage.outfitList) {
      this.setState({outfitList: []});
    } else {
      this.setState({outfitList: JSON.parse(localStorage.getItem('outfitList'))});
    }
  }

  componentDidUpdate() {
    localStorage.setItem('product', JSON.stringify(this.state.product));
    localStorage.setItem('outfitList', JSON.stringify(this.state.outfitList));
  }

  getProduct(id) {
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

  async renderRelated(event) {
    const relatedId = event.target.closest('button').className;
    await this.setState({productId: relatedId});
    this.getProduct(this.state.productId);
  }

  updateTotal(total) {
    this.setState({
      total: total
    });
  }

  toggleProductToOutfitList(product) {
    let productInList = checkOutfitListPresence(product, this.state.outfitList);

    if (!productInList) {
      let newOutfitList = this.state.outfitList.concat([product]);
      this.setState({outfitList: newOutfitList});
    } else {
      const newOutfitList = this.state.outfitList.filter((p) => String(p.id) !== String(product.id));
      this.setState({outfitList: newOutfitList});
    }
  }

  render () {
    return (
      <React.Fragment>
        <TempTopBanner sendNumber={this.sendNumber}/>
        <ProductOverview
          product={this.state.product}
          isProductInOutfitList={checkOutfitListPresence(this.state.product, this.state.outfitList)}
          total={this.state.total}
          toggleProductToOutfitList={() => this.toggleProductToOutfitList(this.state.product)}
        />
        <Related
          productId={this.state.productId}
          homeProduct={this.state.product}
          outfitList={this.state.outfitList}
          renderRelated={this.renderRelated.bind(this)}
          toggleProductToOutfitList={this.toggleProductToOutfitList.bind(this)}
        />
        <QA product={this.state.productId} productInfo={this.state.product}/>
        <Reviews
          productId={this.state.productId}
          productInfo={this.state.product}
          updateTotal={this.updateTotal.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default App;
