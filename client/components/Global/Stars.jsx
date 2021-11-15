import React, { useState, useEffect } from 'react';
import axios from 'axios';

const roundRating = (rating) => {
  const integer = Math.floor(rating);
  const decimal = rating - integer;

  if (rating < 0) {
    return 0;
  }

  if (decimal < 0.125) {
    return integer + 0;
  } else if (decimal < 0.375) {
    return integer + 0.25;
  } else if (decimal < 0.675) {
    return integer + 0.5;
  } else if (decimal < 0.875) {
    return integer + 0.75;
  } else {
    return integer + 1;
  }
};

const Stars = (props) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (props.productId) {
      axios.post('/getRating', { productId: props.productId }).then((result) => {
        setRating(result.data);
        if (props.getRating) {
          props.getRating(result.data);
        }
      })
        .catch((err) => {
          console.log('Client unable to get rating', err);
        });
    } else if (props.rating) {
      setRating(props.rating);
    }
  }, [props.productId, props.rating], [props.total]);

  let roundedRating = roundRating(rating) / 5 * 100;
  let width = `${roundedRating}%`;
  const style = { width };

  return (
    <div className='stars-outer'>
      <div className='stars-inner' style={style} > </div>
    </div>
  );
};

export default Stars;