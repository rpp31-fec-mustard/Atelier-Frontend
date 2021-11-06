import React from 'react';

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

const getAveragePercent = (num, avg) => {
  let percent = (num / avg) * 100;
  return Math.floor(percent);
};

const StarAverageEntry = (props) => {
  return (
    <div className='star'>
      <div className='numStar' onClick={props.handleChange.bind(this)} > {order(props.star)} stars:
      </div>
      <progress className="star_bar" max="100" value={getAveragePercent(props.average, props.total)}> </progress>
    </div>
  );
};

export default StarAverageEntry;

