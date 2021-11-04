import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
import FilterDisplay from './FilterDisplay.jsx';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: 'relevant',
      id: this.props.product,
      allReviews: [],
      displayedReviews: [],
      starFilter: []
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
      this.get(options).then((result) => {
        if (this.state.starFilter.length === 0) {
          this.setState({
            allReviews: result.reviewsArr,
            displayedReviews: result.reviewsArr
          });
        } else {
          this.filterReviews(result.reviewsArr, this.state.starFilter);
        }
      })
        .catch((err) => {
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
            starFilter: starFilter
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
    let options = {
      id: this.state.id,
      sort: 'relevant',
    };
    this.get(options).then((result) => {
      this.setState({
        allReviews: result.reviewsArr,
        displayedReviews: result.reviewsArr
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
        <div className='filterMessage'>
          <FilterDisplay remove={this.onRemoveButton.bind(this)} filters={this.state.starFilter} />
        </div>
        <div className='reviews'>
          <Ratings handleChange={this.handleStarChange.bind(this)} productId={this.state.id} />
          <ReviewsList onChange={this.handleSortedList.bind(this)} list={this.state.displayedReviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;

