import React from 'react';


const AddReviewThumbnail = (props) => {
  return (
    <section>
      <section onClick={() => { props.removeImage(props.url); }}>X</section>
      <img className='addedImage' src={props.url} />
    </section>
  );
};

export default AddReviewThumbnail;