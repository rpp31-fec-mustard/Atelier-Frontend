import React, { useState } from 'react';

const Answer = (props) => {

  var singleAnswer = props.answer[0][props.id]

  return (
    <div className="singleAnswer">
      {singleAnswer.body}
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