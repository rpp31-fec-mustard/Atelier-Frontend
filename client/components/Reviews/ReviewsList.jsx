import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import SortBy from './SortBy.jsx';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 2,
    };
  }

  getMoreReviews(e) {
    this.setState({
      showing: this.state.showing + 2
    });
  }

  moreReviewsButton() {
    if (this.state.showing !== this.props.list.length && (this.state.showing - 1) !== this.props.list.length) {
      return <button onClick={this.getMoreReviews.bind(this)}>More Reviews</button>
    }
  }

  render() {
    return (
      <div className="reviews_container">
        <h1>REVIEWS LIST</h1>
        <SortBy list={this.props.list} onChange={this.props.onChange} />
        <div className="entry_container">
          {this.props.list.filter((review, i) => i < this.state.showing).map((currReview, i) => {
            return (
              <ReviewsListEntry key={i} review={currReview} />
            );
          })}
        </div>
          <div className='reviewButtons'>
            {this.moreReviewsButton()}
            <button>Add a Review</button>
          </div>
      </div>
    );
  }
}

export default ReviewsList;

