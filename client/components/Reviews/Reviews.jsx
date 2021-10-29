import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: 'relevant',
      id: this.props.product,
      reviews: []
    };
  }

  get(option, callback) {
    let options = {
      url: '/getReviews',
      params: option,
      method: 'get'
    }
    axios.request(options).then((result) => {
      callback(null, result.data)
    })
    .catch((err) => {
      callback(err, null)
    })
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
      this.get(options, (err, result) => {
        if (err) {

        } else {
          this.setState({
            reviews: result.reviewsArr
          });
        }
      });
    });
  }

  componentDidMount() {
    let options = {
      id: this.state.id,
      sort: 'relevant',
    };
    this.get(options, (err, result) => {
      if (err) {

      } else {
        this.setState({
          reviews: result.reviewsArr
        });
      }
    });
  }

  render() {
    return (
      <div id='ratings_reviews' className='module_container'>
        <div className='reviewsTitle'>
          <h1> Ratings and Reviews </h1>
        </div>
        <div className='reviews'>
          <Ratings product_id={this.state.id}/>
          <ReviewsList onChange={this.handleSortedList.bind(this)} list={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;