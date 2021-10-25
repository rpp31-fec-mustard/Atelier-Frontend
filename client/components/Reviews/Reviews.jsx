import React from 'react';
import $ from 'jquery';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='module_container'>
        <div className='reviewsTitle'>
          <h1> Ratings and Reviews </h1>
        </div>
        <div className='reviews'>
          <Ratings />
          <ReviewsList />
        </div>
      </div>
    );
  }
}

export default Reviews;