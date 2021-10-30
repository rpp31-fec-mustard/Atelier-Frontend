import React, { useState } from 'react';
import _ from 'underscore';

const Answer = (props) => {

  const convertDate = (date) => {
    var updatedDate = new Date(date).toDateString();
    var dateArr = date.split(' ');
    dateArr.shift();
    dateArr[1] = dateArr[1] + ', ';
    return updatedDate;
  };

  return (
    <div className="singleAnswer">
      <div>{props.answer}</div>
      <div>
        <div><sub>by {props.name}, {convertDate(props.date)} | Helpful? Yes({props.helpfulness}) | Report</sub></div>
      </div>
    </div>
  );
};

export default Answer;