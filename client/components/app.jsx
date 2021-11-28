/* eslint-disable func-style */
import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';
import defaultOnLoad from './defaultOnLoad.jsx';
import checkOutfitListPresence from './Global/checkOutfitListPresence.jsx';

// fixtures
import fixtures from '../../test/fixtures.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '59553', //testing
      product: fixtures.product, //testing
      total: '0',

      // productId: '59601', //testing ML
      // product: defaultOnLoad.productOnLoad, //testing
      addedHomeProduct: {},
      outfitList: []

    };
    this.sendNumber = this.sendNumber.bind(this);
    this.setOutfitList = this.setOutfitList.bind(this);
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

  setOutfitList(newOutfitList) {
    this.setState({outfitList: newOutfitList});
  }

  //off for testing ML
  componentDidMount() {
    Promise.resolve(this.getProduct(this.state.productId));
  }


  getProduct(id) {
    axios.get('/product', {
      params: {
        productId: id
      }
    })
      .then((res) => {
        this.setState({product: res.data});
        // }
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

  toggleToOutfitList(product) {
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
          id={this.state.productId}
          product={this.state.product}
          isProductInOutfitList={checkOutfitListPresence(this.state.product, this.state.outfitList)}
          total={this.state.total}
          toggleProductToOutfitList={() => this.toggleToOutfitList(this.state.product)}
        />
        <Related
          productId={this.state.productId}
          homeProduct={this.state.product}
          outfitList={this.state.outfitList}
          setOutfitList={this.setOutfitList}
          renderRelated={this.renderRelated.bind(this)}
          toggleToOutfitList={this.toggleToOutfitList.bind(this)}
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
