import React from 'react';

const ReviewsListEntry = (props) => {

  return (
    <div className='reviews_entry'>
      <div className='username'> username </div>
      <div className='date'> date</div>
      <div className='rating'>Rating</div>
      <div className='summary'> summary </div>
      <div className='recommend'> recommend</div>
      <div className='reviewBody'> body</div>
      <div className='response'> response </div>
      <div className='helpful'>Helpful?
       <a href='sample'> (Yes) </a>
        </div>
    </div>
  );
};

export default ReviewsListEntry;