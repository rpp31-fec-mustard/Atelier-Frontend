import React from 'react';

const Recommend = (props) => {
  return (
    <div className='modal_recommend'>
      Recommend?<sup>*</sup>
      <input type="radio" value="true" name="recommend" onChange={props.onChange} checked={props.recommend === 'true'} required/> Yes
      <input type="radio" value="false" name="recommend" onChange={props.onChange} checked={props.recommend === 'false'} /> No
    </div>
  );
};

export default Recommend;