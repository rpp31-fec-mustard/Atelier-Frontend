import React from 'react';
import axios from 'axios';
import Thumbnail from './ReviewThumbnail.jsx';
import ImgModal from './ImgModal.jsx';
import Stars from '../Global/Stars.jsx';
import trackPost from './trackPost.jsx';
import track from 'react-tracking';


// @track({widget: 'Ratings and Reviews'}, { dispatch: data => {
//   trackPost(data)
//  }})

class ReviewsListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      helpful: this.props.review.helpfulness,
      body: '',
      addShowButton: false,
      showMore: false,
      img: '',
      reported: false
    };
  }

  wouldRecommend() {
    if (this.props.review.recommend) {
      return (
        <section className='recommendWrapper'>
        <i className="ri-check-line" style={{fontSize: "24px"}}></i>
        <section className='recommendText' style={{fontSize: "12px", marginTop: '6px'}}>I would recommend this item!
          </section>
        </section>
      );
    }
  }

  convertDate(date) {
    var date = new Date(date).toDateString();
    var dateArr = date.split(' ');
    dateArr.shift();
    dateArr[1] = (Number(dateArr[1]) + 1) + ', ';
    return dateArr.join(' ');
  }

  response(res) {
    if (res) {
      return 'Response from seller ' + res;
    }
  }

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productId,
      className: `showImgModal`
    })
  }))

  showModal(e) {
    this.setState({
      modal: true,
      img: e.target.src
    });
  }

  closeModal() {
    this.setState({
      modal: false
    });
  }

  renderStars() {
    if (this.props.rating) {
      return <Stars rating={this.props.rating} />;
    }
  }

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productId,
      className: 'showFullBody'
    })
  }))
  showMore(e) {
    e.preventDefault();
    this.setState({
      body: this.props.review.body,
      showMore: true
    });
  }

  showLess(e) {
    if (e) {
      e.preventDefault();
    }
    let newBody = this.props.review.body.substring(0, 250);
    this.setState({
      body: newBody,
      addShowButton: true,
      showMore: false
    });
  }

  reviewListBody(body) {
    if (body.length > 250) {
      this.showLess();
    } else {
      this.setState({
        body: body,
        addShowButton: false
      });
    }
  }

  displayButton() {
    if (!this.state.showMore) {
      return (
        <a className='showBody' href='/' onClick={this.showMore.bind(this)}> show more </a>
      );
    } else {
      return (
        <a href='/' className='hideBody' onClick={this.showLess.bind(this)}> show less </a>
      );
    }
  }


 @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productId,
      className: 'reviewHelpfulness'
    })
  }))
  handleYesClick(e) {
    e.preventDefault();
    let num = this.state.helpful;
    if (!localStorage.getItem(this.props.review.review_id)) {
      localStorage.setItem(this.props.review.review_id, true);
      this.setState({
        helpful: num + 1
      });

      axios.post('/postHelpfulness', { reviewId: this.props.review.review_id })
        .catch((err) => {
          console.log('Client unable to post helpfulness', err);
        });
    }
  }

  @track((props, state, [event]) => ({
    time: new Date().toString(),
    element: JSON.stringify({
      productId: props.productId,
      className: `reportReview`
    })
  }))
  handleReportClick(e) {
    e.preventDefault();
    let name = this.props.review.review_id + ' review'
    if (!localStorage.getItem(name)) {
      localStorage.setItem(name, true);
      axios.put('/reportReview', {
        reviewId: this.props.review.review_id
      })
        .then(() => {
         this.setState({
           reported: true
         })
        })
        .catch((err) => {
          console.log('error reporting review', err);
        });
    }
  }

  displayReported() {
    let name = this.props.review.review_id + ' review'
    if (!localStorage.getItem(name)) {
      return (
        <a href='' onClick={this.handleReportClick.bind(this)} >report </a>
      )
    } else {
      return (
        <section>reported</section>
      )
    }
  }

  componentDidMount() {
    this.reviewListBody(this.props.review.body);
    this.setState({
      rating: this.props.review.rating,
      helpful: this.props.review.helpfulness
    });
  }

  componentDidUpdate() {
    let newBody = this.props.review.body.substring(0, 250);
    let currBody = this.state.body.substring(0, 250);
    if ((this.state.rating !== this.props.review.rating) || (currBody !== newBody)) {
      this.reviewListBody(this.props.review.body);
      this.setState({
        rating: this.props.review.rating,
        helpful: this.props.review.helpfulness
      });
    }
  }

  render() {
    return (
      <div className='reviewEntry'>
        <section className='wrapper_RT'>
          <section className='starRating'> {this.renderStars()} </section>
          <section className='name_date_RT'>
            <section className='username'> {this.props.review.reviewer_name} </section>
            <section className='date'> , {this.convertDate(this.props.review.date)} </section>
          </section>
        </section>
        <section className='reviewSummary'> {this.props.review.summary} </section>
        <section className='reviewBody'>
          {this.state.body}
          <section className='bodyDisplayButton'>
            {this.state.addShowButton ? this.displayButton() : null}
          </section>
          <section className='reviewThumbnailContainer'>
            {this.props.review.photos.map((photo, i) => {
              return (
                <Thumbnail key={i} photo={photo} close={this.closeModal.bind(this)} show={this.state.modal} onClick={this.showModal.bind(this)} />
              );
            })}
            <ImgModal show={this.state.modal} close={this.closeModal.bind(this)} url={this.state.img} />
          </section>
        </section>
        <section className='recommend'>
          {this.wouldRecommend()}
        </section>
        <section className='response'> {this.response(this.props.review.response)} </section>
        <section className='footerWrapper'>
        <section className='helpful'>
          Helpful?
          <a href='' onClick= {this.handleYesClick.bind(this)}>
            Yes({this.state.helpful})
          </a>
        </section> |
        <section className='report'>
          {this.displayReported()}
        </section>
        </section>
      </div>
    );
  }
}

export default ReviewsListEntry;