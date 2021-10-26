import React from 'react';
import $ from 'jquery';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: 'relevant',
      id: '59553',
      reviews: []
    };
  }

  get(options, callback) {
    $.ajax({
      type: 'GET',
      url: '/getReviews',
      data: options,
      contentType: 'application/json',
      success: (result) => {
        callback(null, result);
      },
      error: (err) => {
        callback(err, null);
      }
    });
  }

  componentDidMount() {
    let options = {
      id: this.state.id,
      sort: 'relevant',
    };
    this.get(options, (err, result) => {
      if (err) {
        console.log('err');
      } else {
        this.setState({
          reviews: result.reviewsArr
        });
      }
    });

  }

  render() {
    return (
      <div className='module_container'>
        <div className='reviewsTitle'>
          <h1> Ratings and Reviews </h1>
        </div>
        <div className='reviews'>
          <Ratings />
          <ReviewsList list={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;