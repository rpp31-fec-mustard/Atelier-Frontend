import React from 'react';
import TempTopBanner from './TempTopBanner.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '59553'
    };
  }


  render () {
    return (
      <div id="index">
        <TempTopBanner />
        <ProductOverview />
        {/* testing - off to squelch jest log error */}
        <Related product={this.state.productId}/>
        <QA product={this.state.productId}/>
        <Reviews product={this.state.productId} />
      </div>
    );
  }
}

export default App;