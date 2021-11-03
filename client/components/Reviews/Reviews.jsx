import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: 'relevant',
      id: this.props.product,
      reviews: []
    };
  }

  get(option) {
    let options = {
      url: '/getReviews',
      params: option,
      method: 'get'
    };
    return axios.request(options).then((result) => {
      return result.data;
    })
      .catch((err) => {
        throw err;
      });
  }

  sortListOnChange(e, callback) {
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

  handleSortedList(e) {
    this.sortListOnChange(e, () => {
      let options = {
        id: this.state.id,
        sort: this.state.sorted,
      };
      this.get(options)
        .then((result) => {
          this.setState({
            reviews: result.reviewsArr
          });
        })
        .catch((err) => {
          throw err;
        });
    });
  }

  componentDidMount() {
    let options = {
      id: this.state.id,
      sort: 'relevant',
    };
    this.get(options).then((result) => {
      this.setState({
        reviews: result.reviewsArr
      });
    })
      .catch((err) => {
        console.log('Error Getting Reviews:', err);
      });
  }

  render() {
    return (
      <div id='ratings_reviews' className='module_container'>
        <div className='reviewsTitle'>
          <h1> Ratings and Reviews </h1>
        </div>
        <div className='reviews'>
          <Ratings productId={this.state.id} />
          <ReviewsList onChange={this.handleSortedList.bind(this)} list={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;