import React from 'react';
import axios from 'axios';

import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';
import defaultOnLoad from './defaultOnLoad.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: '59601', //testing
      productId: '59553', //testing
      product: defaultOnLoad.productOnLoad,

    };
    this.sendNumber = this.sendNumber.bind(this);
  }

  //! testing only
  sendNumber(id) {
    console.log('app id :', id);
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

  //! do not need if default data populates all states
  // componentDidMount() {
  //   this.getProduct(this.state.productId);
  // }



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
        <TempTopBanner sendNumber={this.sendNumber}/>
        <ProductOverview id={this.state.productId} product={this.state.product}/>
        <Related productId={this.state.productId} homeProduct={this.state.product} renderRelated={this.renderRelated.bind(this)}/>
        <QA product={this.state.productId} productInfo={this.state.product}/>
        <Reviews productId={this.state.productId} />
      </React.Fragment>
    );
  }
}

export default App;
