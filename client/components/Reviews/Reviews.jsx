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

  handleStarChange(e) {
    let clickedStar = e.target.innerText[0];
    let allReviews = this.state.allReviews;
    let starFilter = this.state.starFilter;
    let filteredReviews = [];
    // if there are no filters on
    if (starFilter.length === 0) {
      //add clickedstar to clickedstar storage
      starFilter.push(clickedStar)
      //iterate through all reviews which already has them sorted
        //backwards to keep proper sorting order
      for (var i = 0; i < allReviews.length; i++)  {
        let currRating = allReviews[i].rating.toString();
          //if the rating of the review in allreviews equals a rating clicked
          if (currRating === clickedStar) {
            //add it to the filters
            filteredReviews.push(allReviews[i])
          }
      }
      //set state to filtered reviews and star filter to added filter
      this.setState({
        displayedReviews: filteredReviews,
        starFilter: starFilter
      })
    } else {
      //if there are filters on and
      //if clicked star already has a filter on (is in starFilter)
      if (starFilter.indexOf(clickedStar) > -1) {
        //unclick filter and take off filter storage
        starFilter.splice(starFilter.indexOf(clickedStar), 1);
        //if there a no more filters on display all messages and reset starfilter state
        if (starFilter.length === 0) {
          this.setState({
            displayedReviews: allReviews,
            starFilter: starFilter
          })
        } else {
          //if there are still filters re-iterate through all sorted reviews + get needed reviews
          for (var i = 0; i < allReviews.length; i++) {
            let currRating = allReviews[i].rating.toString();
            for (var j = 0; j < starFilter.length; j++) {
              let currStar = starFilter[j]
              //if the rating of the review in allreviews equals a rating in the clicked storage
              if (currRating === currStar) {
                //add it to the filters
                filteredReviews.push(allReviews[i])
              }
            }
          }
          this.setState({
            displayedReviews: filteredReviews,
            starFilter: starFilter
          })
        }
      } else {
        starFilter.push(clickedStar)
        //if clicked star filter is NOT on and if there are filters already on
        for (var i = 0; i < allReviews.length; i++)  {
          let currRating = allReviews[i].rating.toString();
          console.log(starFilter)
          for (var j = 0; j < starFilter.length; j++) {

            let currStar = starFilter[j]
            //if the rating of the review in allreviews equals a rating in the clicked storage
            if (currRating === currStar) {
              //add it to the filters
              filteredReviews.push(allReviews[i])
            }
          }
        }
        this.setState({
          displayedReviews: filteredReviews,
          starFilter: starFilter
        })
      }
    }
  }

  onRemoveButton(e) {
    e.preventDefault()
    this.setState({
      displayedReviews: this.state.allReviews,
      starFilter: []
    })
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