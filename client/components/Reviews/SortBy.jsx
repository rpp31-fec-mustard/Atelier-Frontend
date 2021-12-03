import React from 'react';
import { useTracking } from 'react-tracking';


const SortBy = (props) => {
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

  const handleSortChange = () => {
    trackEvent({
      time: new Date().toString(),
      element: JSON.stringify({
        productId: props.productInfo.id,
        className: 'sortBy'
      }),
      widget: 'Ratings and Reviews'
    });

    props.onChange;
  };

  return (
    <form className='sortBy'>
      <label> {props.list.length} reviews, Sorted by
      </label>
      <select value={props.selected} onChange={handleSortChange} name="sortBy" className="sortByButton">
        <option>relevance</option>
        <option>newest</option>
        <option>most helpful</option>
      </select>
    </form>
  );
};
export default SortBy;