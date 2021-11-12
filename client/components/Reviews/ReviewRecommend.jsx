import React from 'react';

const Recommend = (props) => {
  return (
    <div className='modal_recommend'>
      Recommend?
      <input type="radio" value="yes" name="recommend" onChange={props.onChange} checked={props.recommend === 'yes'} /> Yes
      <input type="radio" value="no" name="recommend" onChange={props.onChange} checked={props.recommend === 'no'} /> No
    </div>
  );
};

export default Recommend;