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
      return result.data
    })
      .catch((err) => {
        throw err
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
         })
       } else {
         let filteredReviews = []
        for (var i = 0; i < result.reviewsArr.length; i++) {
          for (var j = 0; j < this.state.starFilter.length; j++) {
            if (result.reviewsArr[i].rating.toString() === this.state.starFilter[j]) {
              filteredReviews.push(result.reviewsArr[i])
            }
          }
        }
        this.setState({
          allReviews: result.reviewsArr,
          displayedReviews: filteredReviews
        })
       }
      })
      .catch((err) => {
        throw err
      })
    });
  }

  //////// NEED TO HANDLE SORT AND FILTER AT SAME TIME///////////

  handleStarChange(e) {
    let clickedStar = e.target.innerText[0];
    let starFilter = this.state.starFilter;
    let filteredReviews = [];
    let allReviews = this.state.allReviews;
    if (starFilter.length === 0) {
      starFilter.push(clickedStar)
      for (var i = 0; i < allReviews.length; i++) {
        if (allReviews[i].rating.toString() === clickedStar.toString()) {
          filteredReviews.push(allReviews[i])
        }
      }
      this.setState({
        displayedReviews: filteredReviews,
        starFilter: [clickedStar]
      })
    } else {
      if (starFilter.indexOf(clickedStar) > -1) {
        let currentStarFilters = starFilter;
        let currentFiltered = this.state.displayedReviews;
        currentStarFilters.splice(starFilter.indexOf(clickedStar), 1)
        if (currentStarFilters.length === 0) {
          this.setState({
            displayedReviews: allReviews,
            starFilter: currentStarFilters
          })
        } else {
          if (currentFiltered.length > 0) {
            for (var i = 0; i < currentFiltered.length; i++) {
                if (currentFiltered[i].rating.toString() === clickedStar) {
                  currentFiltered.splice(i, 1)
                  this.setState({
                    displayedReviews: currentFiltered,
                    starFilter: currentStarFilters
                  })
                }
            }
          } else {
            this.setState({
              starFilter: currentStarFilters
            })
          }

        }
      } else {
        for (var i = 0; i < allReviews.length; i++) {
          if (allReviews[i].rating.toString() === clickedStar.toString()) {
            filteredReviews.push(allReviews[i])
          }
        }
        let combinedFilters = this.state.displayedReviews.concat(filteredReviews)
        let clickedStars = starFilter
        this.setState({
          displayedReviews: combinedFilters,
          starFilter: clickedStars.concat(clickedStar)
        })
      }
    }
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
      })
    })
    .catch((err) => {
      console.log('Error Getting Reviews:', err);
    })
  }

  render() {
    return (
      <div id='ratings_reviews' className='module_container'>
        <div className='reviewsTitle'>
          <h1> Ratings and Reviews </h1>
        </div>
          <div className='filterMessage'>
            <FilterDisplay filters={this.state.starFilter}/>
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