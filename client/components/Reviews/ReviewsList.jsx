import React, { useState, useEffect } from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import SortBy from './SortBy.jsx';
import AddReviewModal from './AddReviewModal/AddReviewModal.jsx';
import { useTracking } from 'react-tracking';

const ReviewsList = (props) => {
  const [showing, setShowing] = useState(2);
  const [modal, setModal] = useState(false);
  const { Track, trackEvent } = useTracking({},
    {
      dispatch: data => {
        console.log(data);
        // axios.post('/interactions', {
        //   time: data.time,
        //   element: data.element,
        //   widget: data.widget
        // })
        //   .catch((error) => {
        //     console.log('Client unable to post interaction: ', error);
        //   });
      }
    });

  const displayReviewsList = () => {
    if (props.list.length !== 0) {
      return (
        <div className="reviewEntry_container">
          {props.list.filter((review, i) => i < showing).map((currReview, i) => {
            return (
              <ReviewsListEntry key={i} review={currReview} rating={currReview.rating} productId={props.productInfo.id} />
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };

  const getMoreReviews = (e) => {
    trackEvent({
      time: new Date().toString(),
      element: JSON.stringify({
        productId: props.productInfo.id,
        className: 'reviewListButton show'
      }),
      widget: 'Ratings and Reviews'
    });

    setShowing(showing + 2);
  };

  const moreReviewsButton = (e) => {
    if (showing !== props.list.length && (showing - 1) !== props.list.length) {
      return <button className='reviewListButton show' onClick={getMoreReviews.bind(this)}>More Reviews</button>;
    } else {
      return null;
    }
  };

  const showModal = (e) => {
    trackEvent({
      time: new Date().toString(),
      element: JSON.stringify({
        productId: props.productInfo.id,
        className: 'addReview'
      }),
      widget: 'Ratings and Reviews'
    });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="reviewsList_container">
      <section className='SortByWrapper'>
        <SortBy list={props.list} onChange={props.onChange} />
      </section>
      {displayReviewsList()}
      <div className='reviewButtons'>
        {moreReviewsButton()}
        <button className='reviewListButton add' onClick={showModal.bind(this)}>Add a Review +</button>
        <AddReviewModal meta={props.meta} close={closeModal.bind(this)} show={modal} productInfo={props.productInfo} post={props.post} sort={props.sort} />
      </div>
    </div>
  );
};
export default ReviewsList;

