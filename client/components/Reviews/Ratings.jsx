import React from 'react';
import Stars from '../Global/Stars.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='ratings_container'>
        <h1> Ratings Breakdown </h1>
        <div className='overall'>
          <Stars productId={this.props.productId} />
        </div>
        <div className='starBreakdown'>
          Star breakdown
          <div className='star'>5 stars:
            <progress className="star_bar" max="100" value="70"> 70% </progress>
          </div>
          <div className='star'>4 stars:  <progress className="star_bar" max="100" value="90"></progress>
          </div>
          <div className='star'>3 stars:  <progress className="star_bar" max="100" value="30"></progress>
          </div>
          <div className='star'>2 stars:  <progress className="star_bar" max="100" value="50"></progress>
          </div>
          <div className='star'>1 stars:  <progress className="star_bar" max="100" value="20"></progress>
          </div>
        </div>
        <div className='productBreakdown'>Product Breakdown</div>
      </div>
    );
  }
}


export default Ratings;

