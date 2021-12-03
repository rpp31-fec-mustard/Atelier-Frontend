import React from 'react';


const SortBy = (props) => {
  return (
    <form className='sortBy'>
      <label> {props.list.length} reviews, Sorted by
      </label>
      <select value={props.selected} onChange={props.onChange} name="sortBy" className="sortByButton dmSB">
        <option>relevance</option>
        <option>newest</option>
        <option>most helpful</option>
      </select>
    </form>
  );
};
export default SortBy;