import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import SortBy from './SortBy.jsx';
import AddReviewModal from './AddReviewModal/AddReviewModal.jsx';

import track from 'react-tracking';


@track({widget: 'Ratings and Reviews'}, { dispatch: data => console.log(data) })
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 2,
      modal: false
    };
  }

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    productId: props.productInfo.id,
    className: 'showMoreReviews'
  }))
  getMoreReviews(e) {
    this.setState({
      showing: this.state.showing + 2
    });
  }

  moreReviewsButton(e) {
    if (this.state.showing !== this.props.list.length && (this.state.showing - 1) !== this.props.list.length) {
      return <button className='showMoreReviews' onClick={this.getMoreReviews.bind(this)}>More Reviews</button>;
    }
  }

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    productId: props.productInfo.id,
    className: 'openAddReviewModal'
  }))
  showModal(e) {
    this.setState({
      modal: true
    });
  }


  closeModal() {
    this.setState({
      modal: false
    });
  }

  render() {
    return (
      <div className="reviews_container">
        <h3>Review List</h3>
        <SortBy list={this.props.list} onChange={this.props.onChange} />
        <div className="entry_container">
          {this.props.list.filter((review, i) => i < this.state.showing).map((currReview, i) => {
            return (
              <ReviewsListEntry key={i} review={currReview} rating={currReview.rating} productId={this.props.productInfo.id} />
            );
          })}
        </div>
        <div className='reviewButtons'>
          {this.moreReviewsButton()}
          <button className='openAddReviewModal' onClick={this.showModal.bind(this)}>Add a Review</button>
          <AddReviewModal meta={this.props.meta} close={this.closeModal.bind(this)} show={this.state.modal} productInfo={this.props.productInfo} />
        </div>
      </div>
    );
  }
}

export default ReviewsList;

