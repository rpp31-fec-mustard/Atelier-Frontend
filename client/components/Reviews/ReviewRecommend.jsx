import React from 'react';

const Recommend = (props) => {
  return (
    <form className='modal_recommend'>
      Recommend?
      <input type="radio" value="yes" name="yesRecommend" onChange={props.onChange} checked={props.recommend === 'yes'} /> Yes
      <input type="radio" value="no" name="noRecommend" onChange={props.onChange} checked={props.recommend === 'no'} /> No
    </form>
  )
}

export default Recommend;