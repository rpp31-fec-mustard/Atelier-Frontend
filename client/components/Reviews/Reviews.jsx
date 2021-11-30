import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
import FilterDisplay from './FilterDisplay.jsx';
import track from 'react-tracking';
import trackPost from './trackPost.jsx'

// @track({widget: 'Ratings and Reviews'}, { dispatch: data => {
//  trackPost(data)
// }})

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: 'relevant',
      id: this.props.productId,
      allReviews: [],
      displayedReviews: [],
      starFilter: [],
      reviewMeta: [],
    };
  }

  adjustMeta(reviews, meta) {
    let ratingBreakdown = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    let recommended = {false: 0, true: 0}
    for (var i = 0; i < reviews.length; i++) {
      ratingBreakdown[reviews[i].rating]++
      if (reviews[i].recommend) {
        recommended.true++
      } else {
        recommended.false++
      }
    }
    meta.ratings = ratingBreakdown
    meta.recommended = recommended
  }

  get(option) {
    let options = {
      url: '/getReviews',
      params: option,
      method: 'get'
    };
    return axios.request(options).then((result) => {
      this.adjustMeta(result.data.reviewsArr, result.data.meta)
      this.setState({
        allReviews: result.data.reviewsArr,
        displayedReviews: result.data.reviewsArr,
        reviewMeta: result.data.meta,
      });
      this.props.updateTotal(result.data.reviewsArr.length);
    })
      .catch((err) => {
        console.log('Error Getting Reviews:');
      });
  }

  post(data) {
    let options = {
      url: 'postReview',
      params: data,
      method: 'post'
    };

    return axios.request(options).then((result) => {
      this.setState({
        allReviews: result.data.reviewsArr,
        displayedReviews: result.data.reviewsArr,
        reviewMeta: result.data.meta,
      });
      this.props.updateTotal(result.data.reviewsArr.length);
    }).catch((err) => {
      console.log(err);
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

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productId,
      className: `sortBy: ${event.target.value}`
    })
  }))
  handleSortedList(e) {
    this.sortListOnChange(e, () => {
      let options = {
        productId: this.state.id,
        sort: this.state.sorted,
      };
      this.get(options).then((result) => {
        if (this.state.starFilter.length === 0) {
          if (result) {
            this.setState({
              allReviews: result.reviewsArr,
              displayedReviews: result.reviewsArr
            });
          }
        } else {
          this.filterReviews(result.reviewsArr, this.state.starFilter);
        }
      }).catch((err) => {
        throw err;
      });
    });
  }


  filterReviews(reviews, filter) {
    let filteredReviews = [];
    for (var i = 0; i < reviews.length; i++) {
      for (var j = 0; j < filter.length; j++) {
        if (reviews[i].rating.toString() === filter[j]) {
          filteredReviews.push(reviews[i]);
        }
      }
    }
    this.setState({
      allReviews: reviews,
      displayedReviews: filteredReviews
    });
  }


  @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productId,
      className: `reviewFilter: ${event.target.innerText}`
    })
  }))
  handleStarChange(e) {
    let clickedStar = e.target.innerText[0];
    let allReviews = this.state.allReviews;
    let starFilter = this.state.starFilter;
    let filteredReviews = [];
    if (starFilter.length === 0) {
      starFilter.push(clickedStar);
      for (var i = 0; i < allReviews.length; i++) {
        let currRating = allReviews[i].rating.toString();
        if (currRating === clickedStar) {
          filteredReviews.push(allReviews[i]);
        }
      }
      this.setState({
        displayedReviews: filteredReviews,
        starFilter: starFilter
      });
    } else {
      if (starFilter.indexOf(clickedStar) > -1) {
        starFilter.splice(starFilter.indexOf(clickedStar), 1);
        if (starFilter.length === 0) {
          this.setState({
            displayedReviews: allReviews,
            starFilter: []
          });
        } else {
          this.filterReviews(allReviews, starFilter);
        }
      } else {
        starFilter.push(clickedStar);
        this.filterReviews(allReviews, starFilter);
      }
    }
  }

  onRemoveButton(e) {
    e.preventDefault();
    this.setState({
      displayedReviews: this.state.allReviews,
      starFilter: []
    });
  }

  componentDidMount() {
    if (this.state.id) {
      let options = {
        productId: this.state.id,
        sort: 'relevant',
      };
      this.get(options);
    }
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.productId) {
      this.setState({
        id: this.props.productId
      }, () => {
        let options = {
          productId: this.state.id,
          sort: this.state.sorted,
        };
        this.get(options);
      });
    }
  }

  render() {
    return (
      <div id='ratings_reviews' className='module_container'>
        <div className='reviewsTitle'>
          <h3> Ratings and Reviews </h3>
        </div>
        <div className='filterMessage'>
          <FilterDisplay remove={this.onRemoveButton.bind(this)} filters={this.state.starFilter} />
        </div>
        <div className='reviews'>
          <Ratings handleChange={this.handleStarChange.bind(this)} productId={this.state.id} meta={this.state.reviewMeta} total={this.state.allReviews.length} />
          <ReviewsList onChange={this.handleSortedList.bind(this)} list={this.state.displayedReviews} meta={this.state.reviewMeta} productInfo={this.props.productInfo} sort={this.state.sorted} post={this.post.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Reviews;