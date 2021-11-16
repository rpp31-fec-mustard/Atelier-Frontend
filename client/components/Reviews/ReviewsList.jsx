import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import SortBy from './SortBy.jsx';
import AddReviewModal from './AddReviewModal/AddReviewModal.jsx';


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 2,
      modal: false
    };
  }

  getMoreReviews(e) {
    this.setState({
      showing: this.state.showing + 2
    });
  }

  moreReviewsButton() {
    if (this.state.showing !== this.props.list.length && (this.state.showing - 1) !== this.props.list.length) {
      return <button onClick={this.getMoreReviews.bind(this)}>More Reviews</button>;
    }
  }

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
      <div className="reviewsList_container">
        <SortBy list={this.props.list} onChange={this.props.onChange} />
        <div className="entry_container">
          {this.props.list.filter((review, i) => i < this.state.showing).map((currReview, i) => {
            return (
              <ReviewsListEntry key={i} review={currReview} rating={currReview.rating} />
            );
          })}
        </div>
        <div className='reviewButtons'>
          {this.moreReviewsButton()}
          <button onClick={this.showModal.bind(this)}>Add a Review</button>
          <AddReviewModal meta={this.props.meta} close={this.closeModal.bind(this)} show={this.state.modal} productInfo={this.props.productInfo} post={this.props.post} sort={this.props.sort}/>
        </div>
      </div>
    );
  }
}

export default ReviewsList;

