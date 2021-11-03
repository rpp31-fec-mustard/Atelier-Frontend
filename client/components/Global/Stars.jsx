// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// let qtrPercent = {
//   0: ['8%', '10%', '13%', '20%'],
//   1: ['28%', '30%', '33%', '40%'],
//   2: ['48%', '50%', '53%', '60%'],
//   3: ['68%', '70%', '73%', '80%'],
//   4: ['88%', '90%', '93%', '100%']
// };

// const convertDecimalToQtr = (decimal) => {
//   var buckets = [0.25, 0.5, 0.75, 1];
//   for (let i = 0; i < buckets.length - 1; i++) {
//     var bucketStart = buckets[i];
//     var bucketEnd = buckets[i + 1];

//     if (decimal >= bucketStart && decimal < bucketEnd) {
//       var diffStart = decimal - bucketStart;
//       var diffEnd = bucketEnd - decimal;
//       var index;

//       if (diffStart > diffEnd) {
//         index = i + 1;
//         return index;
//       } else {
//         index = i;
//         return index;
//       }
//     }
//   }
// };

// const getStarPercent = (rating) => {
//   console.log({rating});
//   var integer = Math.floor(rating);

//   if (rating === '0') {
//     return '0%';
//   } else if (rating % 1 === 0) {
//     return qtrPercent[rating - 1][3];
//   } else {
//     var decimal = Math.round((rating - integer) * 100) / 100;
//     var index = convertDecimalToQtr(decimal);
//     return qtrPercent[integer][index];
//   }
// };

const roundRating = (rating) => {
  const integer = Math.floor(rating);
  const decimal = rating - integer;

  if (rating < 0) {
    return 0;
  }

  // if (decimal < 0.125) {
  //   return integer + 0;
  // } else if (decimal < 0.375) {
  //   return integer + 0.25;
  // } else if (decimal < 0.675) {
  //   return integer + 0.5;
  // } else if (decimal < 0.875) {
  //   return integer + 0.75;
  // } else {
  //   return integer + 1;
  // }

  const increment = 0.25;
  const halfIncrement = increment / 2;
  const iterations = 1 / increment;

  for (let i = 0; i < iterations; i++) {
    const step = increment * i;
    const bound = halfIncrement + step;
    if (decimal < bound) {
      return integer + step;
    }
  }
  return integer + 1;
};

const Stars = (props) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.post('/getRating', { productId: props.productId }).then((result) => {
      setRating(result.data);
    })
      .catch((err) => {
        console.log('error getting rating', err);
      });
  }, []);

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