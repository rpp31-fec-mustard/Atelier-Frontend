import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import SortBy from './SortBy.jsx';
import AddReviewModal from './AddReviewModal/AddReviewModal.jsx';
import trackPost from './trackPost.jsx';
import track from 'react-tracking';


@track({widget: 'Ratings and Reviews'}, { dispatch: data => {
  trackPost(data)
 }})

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
    element: JSON.stringify({
      productId: props.productInfo.id,
      className: 'moreReviews'
    })
  }))
  getMoreReviews(e) {
    this.setState({
      showing: this.state.showing + 2
    });
  }

  moreReviewsButton(e) {
    if (this.state.showing !== this.props.list.length && (this.state.showing - 1) !== this.props.list.length) {
      return <button className='reviewListButton' onClick={this.getMoreReviews.bind(this)}>More Reviews</button>;
    }
  }

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productInfo.id,
      className: `addReview`
    })
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
      <div className="reviewsList_container">
        <section className='SortByWrapper'>
          <SortBy list={this.props.list} onChange={this.props.onChange} />
        </section>
        <div className="entry_container">
          {this.props.list.filter((review, i) => i < this.state.showing).map((currReview, i) => {
            return (
              <ReviewsListEntry key={i} review={currReview} rating={currReview.rating} productId={this.props.productInfo.id} />
            );
          })}
        </div>
        <div className='reviewButtons'>
          {this.moreReviewsButton()}
          <button className='reviewListButton' onClick={this.showModal.bind(this)}>Add a Review +</button>
          <AddReviewModal meta={this.props.meta} close={this.closeModal.bind(this)} show={this.state.modal} productInfo={this.props.productInfo} post={this.props.post} sort={this.props.sort}/>
        </div>
      </div>
    );
  }
}

export default ReviewsList;

