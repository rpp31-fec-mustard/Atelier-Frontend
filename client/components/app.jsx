import React from 'react';
import TempTopBanner from './TempTopBanner.jsx'
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import Related from './Related/Related.jsx';
import Reviews from './Reviews/Reviews.jsx';
import QA from './QA/QA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: "59553"
    }
  }

  render () {
    return (
      <div id="index">
        <TempTopBanner />
        <ProductOverview />
        <Related />
        <QA product={this.state.product_id}/>
        <Reviews />
      </div>
    );
  }
};

export default App;