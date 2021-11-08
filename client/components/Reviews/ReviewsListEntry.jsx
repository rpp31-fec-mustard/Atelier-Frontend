import React from 'react';
import axios from 'axios';


class ReviewsListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: this.props.review.helpfulness
    };
  }

  wouldRecommend() {
    if (this.props.review.recommend) {
      return 'I would recommend this item!';
    }
  }

  convertDate(date) {
    var date = new Date(date).toDateString();
    var dateArr = date.split(' ');
    dateArr.shift();
    dateArr[1] = dateArr[1] + ', ';
    return dateArr.join(' ');
  }

  response(res) {
    if (res) {
      return 'Response from seller ' + res;
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
      <div className='entry'>
        <section className='username'> {this.props.review.reviewer_name} </section>
        <section className='date'> {this.convertDate(this.props.review.date)} </section>
        <section className='rating'>Rating: {this.props.review.rating}</section>
        <section className='summary'> {this.props.review.summary} </section>
        <section className='recommend'> {this.wouldRecommend()} </section>
        <section className='reviewBody'> {this.props.review.body}
        </section>
        <section className='response'> {this.response(this.props.review.response)} </section>
        <section className='helpful'>
          Helpful?
          <a href=''>
            Yes({this.state.helpful})
          </a>
        </section>
      </div>
    );
  }
}

export default ReviewsListEntry;