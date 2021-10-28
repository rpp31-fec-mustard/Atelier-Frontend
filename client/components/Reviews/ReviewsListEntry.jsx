import React from 'react';
import axios from 'axios';

class ReviewsListEntry extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      helpful: this.props.review.helpfulness
    }
  }
  wouldRecommend () {
    if (this.props.review.recommend) {
      return 'I would recommend this item!';
    }
  };

  convertDate(date) {
      var date = new Date(date).toDateString();
      var dateArr = date.split(' ');
      dateArr.shift();
      dateArr[1] = dateArr[1] + ', ';
      return dateArr.join(' ');
    };

    response(res) {
      if (res) {
        return 'Response from seller ' + res;
      }
    };

     onClick(e, id) {
      e.preventDefault();
      this.helpfulPost({reviewId: id}, () => {})
    }

     helpfulPost(id, callback) {
      this.setState({
        helpful: this.state.helpful + 1
      }, callback)
      let options = {
        url: '/helpfulPost',
        params: id,
        method: 'POST'
      }
      axios.request(options).then((result) => {
        callback(null, result.data)
      })
      .catch((err) => {
        callback(err, null)
      })
    }
    render() {
      return (
        <div className='entry'>
          <section className='username'> {this.props.review.reviewer_name} </section>
          <section className='date'> {this.convertDate(this.props.review.date)} </section>
          <section className='rating'>Rating: {this.props.review.rating}</section>
          <section className='summary'> {this.props.review.summary} </section>
          <section className='recommend'> {this.wouldRecommend()} </section>
          <section className='reviewBody'> {this.props.review.body} </section>
          <section className='response'> {this.response(this.props.review.response)} </section>
          <section className='helpful'>
            Helpful?
              <a href='/' onClick={(e) => {this.onClick(e, this.props.review.review_id)} } >
                Yes({this.state.helpful})
              </a>
          </section>
        </div>
      );
    }
}

export default ReviewsListEntry;