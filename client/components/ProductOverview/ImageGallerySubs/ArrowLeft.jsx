import React from 'react';
import ReactDOM from 'react-dom';

const ArrowLeft = () => (

  <div className='arrow_po'>
    <div className='arrow_space_po'></div>
    <p onClick={() => {console.log('click')}}>L</p>
    <div className='arrow_space_po'></div>
  </div>

);

export default ArrowLeft;