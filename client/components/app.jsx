import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';
import defaultOnLoad from './defaultOnLoad.jsx';
// fixtures
import fixtures from '../../test/fixtures.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: '59601', //testing
      product: fixtures.product, //testing
      total: '0',

      productId: '59553', //testing ML
      // product: defaultOnLoad.productOnLoad, //testing

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

  //off for testing ML
  componentDidMount() {
    // Promise.resolve(this.getProduct(this.state.productId));
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

  render () {
    return (
      <React.Fragment>
        <TempTopBanner sendNumber={this.sendNumber}/>
        <ProductOverview id={this.state.productId} product={this.state.product} total={this.state.total} />
        <Related productId={this.state.productId} homeProduct={this.state.product} renderRelated={this.renderRelated.bind(this)}/>
        <QA product={this.state.productId} productInfo={this.state.product}/>
        <Reviews productId={this.state.productId} productInfo={this.state.product} updateTotal={this.updateTotal.bind(this)} />
      </React.Fragment>
    );
  }
}

export default App;
