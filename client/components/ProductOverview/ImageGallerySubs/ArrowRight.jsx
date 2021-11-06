import React from 'react';
import ReactDOM from 'react-dom';
import FullScreen from './FullScreen.jsx';


const ArrowRight = (props) => (



  <div className='arrow_po'>
    <div className='arrow_space_po'>
      <FullScreen />
    </div>
    <p onClick={props.imageRightClick}>R</p>
    <div className='arrow_space_po'></div>
  </div>


);

export default ArrowRight;
