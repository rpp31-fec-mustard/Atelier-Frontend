import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Thumbnail from './ReviewThumbnail.jsx';
import ImgModal from './ImgModal.jsx';
import Stars from '../Global/Stars.jsx';

const ReviewsListEntry = (props) => {
  const [rating, setRating] = useState(0);
  const [helpful, setHelpful] = useState(props.review.helpfulness);
  const [body, setBody] = useState('');
  const [addShowButton, setAddShowButton] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [img, setImg] = useState('');
  const [reported, setReported] = useState(false);
  const [modal, setModal] = useState(false);

  const wouldRecommend = () => {
    if (props.review.recommend) {
      return (
        <section className='recommendWrapper'>
          <i className="ri-check-line" style={{ fontSize: '24px' }}></i>
          <section className='recommendText' style={{ fontSize: '12px', marginTop: '6px' }}>I would recommend this item!
          </section>
        </section>
      );
    }
  };

  const convertDate = (date) => {
    var date = new Date(date).toDateString();
    var dateArr = date.split(' ');
    dateArr.shift();
    dateArr[1] = (Number(dateArr[1]) + 1) + ', ';
    return dateArr.join(' ');
  };

  const response = (res) => {
    if (res) {
      return 'Response from seller ' + res;
    }
  };

  const showModal = (e) => {
    setModal(true);
    setImg(e.target.src);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderStars = () => {
    if (props.rating) {
      return <Stars rating={props.rating} />;
    }
  };

  const showMoreBody = (e) => {
    e.preventDefault();
    setBody(props.review.body);
    setShowMore(true);
  };

  const showLess = (e) => {
    if (e) {
      e.preventDefault();
    }
    let newBody = props.review.body.substring(0, 250);
    setBody(newBody);
    setShowMore(false);
    setAddShowButton(true);
  };

  const reviewListBody = (bodyInput) => {
    if (bodyInput.length > 250) {
      showLess();
    } else {
      setBody(bodyInput);
      setAddShowButton(false);
    }
  };

  const displayButton = () => {
    if (!showMore) {
      return (
        <a className='showBody' href='/' onClick={showMoreBody.bind(this)}> show more </a>
      );
    } else {
      return (
        <a href='/' className='hideBody' onClick={showLess.bind(this)}> show less </a>
      );
    }
  };

  const handleYesClick = (e) => {
    e.preventDefault();
    // let num = this.state.helpful;
    if (!localStorage.getItem(props.review.review_id)) {
      localStorage.setItem(props.review.review_id, true);
      setHelpful(helpful + 1);

      axios.post('/postHelpfulness', { reviewId: props.review.review_id })
        .catch((err) => {
          console.log('Client unable to post helpfulness', err);
        });
    }
  };

  const handleReportClick = (e) => {
    e.preventDefault();
    let name = props.review.review_id + ' review';
    if (!localStorage.getItem(name)) {
      localStorage.setItem(name, true);
      axios.put('/reportReview', {
        reviewId: props.review.review_id
      })
        .then(() => {
          setReported(true);
        })
        .catch((err) => {
          console.log('error reporting review', err);
        });
    }
  };

  const displayReported = () => {
    let name = props.review.review_id + ' review';
    if (!localStorage.getItem(name)) {
      return (
        <a href='' onClick={handleReportClick.bind(this)} >report </a>
      );
    } else {
      return (
        <section>reported</section>
      );
    }
  };

  useEffect(() => {
    reviewListBody(props.review.body);
    setRating(props.review.rating);
    setHelpful(props.review.helpfulness);
  }, [props.review.rating, props.review.helpfulness]);

  return (
    <div className='reviewEntry'>
      <section className='wrapper_RT'>
        <section className='starRating'> {renderStars()} </section>
        <section className='name_date_RT'>
          <section className='username'> {props.review.reviewer_name} </section>
          <section className='date'> , {convertDate(props.review.date)} </section>
        </section>
      </section>
      <section className='reviewSummary'> {props.review.summary} </section>
      <section className='reviewBody'>
        {body}
        <section className='bodyDisplayButton'>
          {addShowButton ? displayButton() : null}
        </section>
        <section className='reviewThumbnailContainer'>
          {props.review.photos.map((photo, i) => {
            return (
              <Thumbnail key={i} photo={photo} close={closeModal.bind(this)} show={modal} onClick={showModal.bind(this)} />
            );
          })}
          <ImgModal show={modal} close={closeModal.bind(this)} url={img} />
        </section>
      </section>
      <section className='recommend'>
        {wouldRecommend()}
      </section>
      <section className='response'> {response(props.review.response)} </section>
      <section className='footerWrapper'>
        <section className='helpful'>
          Helpful?
          <a href='' onClick={handleYesClick.bind(this)}>
            Yes({helpful})
          </a>
        </section> |
        <section className='report'>
          {displayReported()}
        </section>
      </section>
    </div>
  );
};

export default ReviewsListEntry;