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
        <div><sub>by {props.name}, {props.date} | Helpful? Yes({props.helpfulness}) | Report</sub></div>
      </div>
    </div>
  )
}

export default Answer;