import React from 'react';


const Thumbnail = (props) => {
  return (
    <section>
      <img className='reviewThumbnail' src={props.photo.url} alt={props.photo.id} onClick={props.onClick}></img>
    </section>
  );
};






export default Thumbnail;