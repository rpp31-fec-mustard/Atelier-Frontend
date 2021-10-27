import React from 'react';

const ReviewsListEntry = (props) => {
  const wouldRecommend = () => {
    if (props.review.recommend) {
      return 'I would recommend this item!';
    }
  };

  const convertDate = (date) => {
    var date = new Date(date).toDateString();
    var dateArr = date.split(' ');
    dateArr.shift();
    dateArr[1] = dateArr[1] + ', ';
    return dateArr.join(' ');
  };

  const response = (res) => {
    if (res) {
      return 'Response from seller ' + res;
    }
  };

  return (
    <div className='entry'>
      <section className='username'> {props.review.reviewer_name} </section>
      <section className='date'> {convertDate(props.review.date)} </section>
      <section className='rating'>Rating: {props.review.rating}</section>
      <section className='summary'> {props.review.summary} </section>
      <section className='recommend'> {wouldRecommend()} </section>
      <section className='reviewBody'> {props.review.body} </section>
      <section className='response'> {response(props.review.response)} </section>
      <section className='helpful'>Helpful? Yes({props.review.helpfulness}) </section>
    </div>
  );
};

export default ReviewsListEntry;