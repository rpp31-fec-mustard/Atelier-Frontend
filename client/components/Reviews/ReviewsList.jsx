import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx'


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="reviews_container">
      <h1>REVIEWS LIST</h1>
        <div className='numReviews'>Number of reviews sorted by ______</div>
      <div className="entry_container">
      <ReviewsListEntry />
      <div className='reviewButtons'>
      <button>More Reviews</button>
      <button>Add a Review</button>
      </div>
      </div>
    </div>
    );
  }
}

export default ReviewsList;

