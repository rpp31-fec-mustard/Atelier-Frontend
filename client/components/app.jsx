import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

//! START TEMPORARY TEST BLOCK
//! testing error - do not remove
/* eslint-disable */
const productOnLoad = {
  "id": 59553,
  "campus": "hr-rpp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-10-18T22:50:41.839Z",
  "updated_at": "2021-10-18T22:50:41.839Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}
/* eslint-enable */
//! END TEMPORARY TEST BLOCK

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '59601', //testing
      // productId: '59553',  //testing

      product: productOnLoad,
    };
    this.randomizerCb = this.randomizerCb.bind(this);
  }


  randomizerCb(id) {
    // console.log('id :', id);
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

  render () {
    return (
      <React.Fragment>
        <TempTopBanner randomizerCb={this.randomizerCb}/>
        <ProductOverview id={this.state.productId} product={this.state.product}/>
        <Related productId={this.state.productId} homeProduct={this.state.product} renderRelated={this.renderRelated.bind(this)}/>
        <QA product={this.state.productId} productInfo={this.state.product}/>
        <Reviews productId={this.state.productId} productInfo={this.state.product}/>
      </React.Fragment>
    );
  }
}

export default App;
