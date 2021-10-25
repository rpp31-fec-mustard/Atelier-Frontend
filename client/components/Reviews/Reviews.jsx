import React from 'react';
import $ from 'jquery';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: '',
      id: '',
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
          reviews: result
        });
      }
    });
  }

  sortList(e, callback) {
    if (e.target.value === 'newest') {
      this.setState({
        sorted: 'newest',
      }, callback);
    } else if (e.target.value === 'relevance') {
      this.setState({
        sorted: 'relevant'
      }, callback);
    } else if (e.target.value === 'most helpful') {
      this.setState({
        sorted: 'helpful'
      }, callback);
    }
  }

  sortedList(e) {
    this.sortList(e, () => {
      let options = {
        id: this.state.id,
        sort: this.state.sorted,
      };
      this.get(options, (err, result) => {
        if (err) {
          console.log('err');
        } else {
          this.setState({
            reviews: result
          });
        }
      });
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
          <ReviewsList onChange={this.sortedList.bind(this)} list={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;