import React from 'react';
import { useTracking } from 'react-tracking';
import axios from 'axios';

const order = (star) => {
  if (star === 1) {
    return '5';
  } else if (star === 2) {
    return '4';
  } else if (star === 3) {
    return '3';
  } else if (star === 4) {
    return '2';
  } else if (star === 5) {
    return '1';
  }
};

const getAveragePercent = (num, total) => {
  if (num && total) {
    let percent = (num / total) * 100;
    return Math.floor(percent);
  } else {
    return 0;
  }
};

const StarAverageEntry = (props) => {
  const { Track, trackEvent } = useTracking({},
    {
      dispatch: data => {
        axios.post('/interactions', {
          time: data.time,
          element: data.element,
          widget: data.widget
        })
          .catch((error) => {
            console.log('Client unable to post interaction: ', error);
          });
      }
    });

  const track = () => {
    trackEvent({
      time: new Date().toString(),
      element: JSON.stringify({
        productId: props.productId,
        className: 'numStar filter'
      }),
      widget: 'Ratings and Reviews'
    });
  };

  return (
    <div className='star' onClick={track}>
      <div className='numStar' onClick={props.handleChange.bind(this)}>{order(props.star)} stars:
      </div>
      <progress className="star_bar" max="100" value={getAveragePercent(props.average, props.total)}> </progress>
      <section className='starTotalReviews'> ({props.average})</section>
    </div>
  );
};

export default StarAverageEntry;

