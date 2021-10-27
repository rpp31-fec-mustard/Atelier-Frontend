import React, { useState } from 'react';
import _ from 'underscore';

const Answer = (props) => {
  // var date = singleAnswer.date;
  // var firstHalf = date.split('T')[0]
  // console.log('new date first half:', new Date(firstHalf))

  // console.log('date split:', date.split('T'))
  // console.log('date parse:', Date.parse(date))

  return (
    <div className="singleAnswer">
      <div>{props.answer}</div>
      <div>
        <div>by {props.name}</div>
        <div>{props.date}</div>
        <div>Helpful? Yes({props.helpfulness})</div>
      </div>
    </div>
  )
}

export default Answer;