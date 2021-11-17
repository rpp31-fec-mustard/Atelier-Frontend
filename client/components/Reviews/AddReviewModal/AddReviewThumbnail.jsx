import React from 'react';


const AddReviewThumbnail = (props) => {
  return (
    <section>
        <img className='addedImage' src={props.url} />
    </section>
  );
};

export default AddReviewThumbnail;