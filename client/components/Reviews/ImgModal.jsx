import React from 'react';

const ImgModal = (props) => {
  if (props.show) {
    return (
      <section className='img_modal'>
        <section className='exitModal' onClick={props.close} >X</section>
        <img className='largeImg' src={props.url} alt={props.id} id={props.id} ></img>
      </section>
    );
  } else {
    return null;
  }
};

export default ImgModal;