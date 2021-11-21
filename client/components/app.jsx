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
      productId: '59601', //testing
      product: fixtures.product, //testing

      // Product needs to have these properties
      // {
      //   id: 60012,
      //   category: 'Suit',
      //   name: 'Abigale Suit',
      //   features: [
      //     {feature: 'Frame', value: '"DuraResin"'},
      //     {feature: 'Non-GMO', value: null},
      //     {feature: 'Non-GMO', value: null}
      //   ],
      //   thumbnailUrl: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      //   defaultPrice: '896.00',
      //   originalPrice: '896.00',
      //   salePrice: null,
      // }

      total: '0'

      // productId: '59553', //testing ML
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

  toggleToOutfitList(event) {
    let label = event.target.innerText;
    const homeProduct = this.state.product;
    if (label === 'Star') {
      // add to outfit list

      // update state addHomeProduct to be true
      // render button to say "Remove"
    } else {
      // remove from outfit list

      // update state addHomeProduct to be false
      // render button to say "Star"
    }
  }

  // pass addHomeProduct state to Related
  render () {
    return (
      <React.Fragment>
        <TempTopBanner sendNumber={this.sendNumber}/>
        <ProductOverview id={this.state.productId} product={this.state.product} total={this.state.total} toggleToOutfitList={this.toggleToOutfitList.bind(this)}/>
        <Related productId={this.state.productId} homeProduct={this.state.product} /*addHomeProduct={this.state.addHomeProduct}*/ renderRelated={this.renderRelated.bind(this)}/>
        <QA product={this.state.productId} productInfo={this.state.product}/>
        <Reviews productId={this.state.productId} productInfo={this.state.product} updateTotal={this.updateTotal.bind(this)} />
      </React.Fragment>
    );
  }
}

export default App;
