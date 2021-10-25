import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='ratings_container'>
       <h1> Ratings Breakdown </h1>
       <div className='overall'> Overall Rating </div>
       <div className='starBreakdown'>
         Star breakdown
         <div className='star'>5 stars</div>
         <div className='star'>4 stars</div>
         <div className='star'>3 stars</div>
         <div className='star'>2 stars</div>
         <div className='star'>1 stars</div>
       </div>
       <div className='productBreakdown'>Product Breakdown</div>
      </div>
    );
  }
}


export default Ratings;
