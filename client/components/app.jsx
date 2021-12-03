/* eslint-disable func-style */
import React from 'react';
import axios from 'axios';
import $ from 'jquery';

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
      darkMode: true, //testing
      // darkMode: false,

      // productId: '59601', //testing ML
      // product: defaultOnLoad.productOnLoad, //testing
      outfitList: []

    };
    this.sendNumber = this.sendNumber.bind(this);
    this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
  }


  //! dark mode toggle
  handleDarkModeClick() {
    this.state.darkMode ? this.setState({darkMode: false}) : this.setState({darkMode: true});
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
    if (!localStorage.outfitList) {
      this.setState({outfitList: []});
    } else {
      this.setState({outfitList: JSON.parse(localStorage.getItem('outfitList'))});
      // this.setState({outfitList: JSON.parse(localStorage.getItem('outfitList')), productId: JSON.parse(localStorage.getItem('productId'))});
    }
    this.setState({});
  }

  // update localStorage whenever outfitList in state is updated
  componentDidUpdate() {
    localStorage.setItem('outfitList', JSON.stringify(this.state.outfitList));
    //not working ML
    // localStorage.setItem('productId', JSON.stringify(this.state.productId));
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
    if (this.state.darkMode) {
      let darkModeClass1 = 'dm';
      $('body').addClass('dm');
      console.log('darkmode on');
    } else {
      let darkModeClass1 = '';
      $('body').removeClass('dm');
      console.log('darkmode off');
    }

    return (
      <React.Fragment>
        <div className='dark_mode_toggle' onClick={this.handleDarkModeClick}>Dark</div>
        <TempTopBanner sendNumber={this.sendNumber}/>
        <ProductOverview
          id={this.state.productId}
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
        <QA product={this.state.productId}
          productInfo={this.state.product}
          darkMode={this.state.darkMode}
        />
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
