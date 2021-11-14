import React from 'react';

const Answer = (props) => {

  const convertDate = (date) => {
    var updatedDate = new Date(date).toDateString();
    updatedDate = updatedDate.split(' ');
    updatedDate.shift();
    updatedDate[1] = updatedDate[1] + ', ';
    return updatedDate.join(' ');
  };

  if (props.name === 'Seller') {
    return (
      <div className="singleAnswer">
        <div>{props.answer}
          <div className="answer-meta"> by
            <div className="seller">&nbsp;{props.name}</div>
            <div>,&nbsp;{convertDate(props.date)} |&nbsp;</div>
            <button className="answer-meta-helpful">&nbsp;Helpful? <u>Yes({props.helpfulness})</u>&nbsp;&nbsp;|</button>
            <button className="answer-meta-report">&nbsp;<u>Report</u></button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="singleAnswer">
        <div>{props.answer}
          <div className="answer-meta">by
            <div>&nbsp;{props.name}</div>
            <div>,&nbsp;{convertDate(props.date)} |&nbsp;</div>
            <button className="answer-meta-helpful">&nbsp;Helpful? <u>Yes({props.helpfulness})</u>&nbsp;&nbsp;|</button>
            <button className="answer-meta-report">&nbsp;<u>Report</u></button>
          </div>
        </div>
      </div>
    );
  }
};

export default Answer;

