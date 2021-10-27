import React, { useState } from 'react';
import _ from 'underscore';

const Answer = (props) => {

  var singleAnswer = props.answer[0][props.id]
  console.log('SINGLE ANSWER:', singleAnswer)
  // var date = singleAnswer.date;
  // var firstHalf = date.split('T')[0]
  // console.log('new date first half:', new Date(firstHalf))

  // console.log('date split:', date.split('T'))
  // console.log('date parse:', Date.parse(date))

  return (
    <div className="singleAnswer">
      <div>{singleAnswer.body}</div>
      <div>
        <div>by {singleAnswer.answerer_name}</div>
        <div>{singleAnswer.date}</div>
        <div>Helpful? Yes({singleAnswer.helpfulness})</div>
      </div>
    </div>

  )
}



//   var keys = Object.keys(props.answer);
//   console.log('keys:', keys);
//   if (keys.length === 0) {
//     return (<div>NO ANSWERS</div>)
//   } else {
//     for (var i = 0; i < keys.length; i++) {
//       var test = <div>{props.answer[keys[i]].body}</div>
//       return test;
//     }
//   }
// };


export default Answer;