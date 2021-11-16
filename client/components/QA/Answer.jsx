import React, { useState } from 'react';
import axios from 'axios';

const Answer = (props) => {

  const [report, setReport] = useState('Report');
  const convertDate = (date) => {
    var updatedDate = new Date(date).toDateString();
    updatedDate = updatedDate.split(' ');
    updatedDate.shift();
    updatedDate[1] = updatedDate[1] + ', ';
    return updatedDate.join(' ');
  };

  const answerHelpful = () => {
    axios.put('/answerHelpful', {
      answerId: props.id
    })
      .then(() => {
        console.log('ANSWER HELPFUL UPDATED');
      })
      .catch((err) => {
        console.log('ERROR ANSWER HELPFUL NOT UPDATED', err);
      });
  };

  const reportAnswer = () => {
    axios.put('/reportAnswer', {
      answerId: props.id
    })
      .then(() => {
        console.log('Answer Reported');
        setReport('Reported');
      })
      .catch((err) => {
        console.log('ERROR REPORTING ANSWER', err);
      });
  };

  if (props.name === 'Seller') {
    return (
      <div className="singleAnswer">
        <div>{props.answer}
          <div className="answer-meta"> by
            <div className="seller">&nbsp;{props.name}</div>
            <div>,&nbsp;{convertDate(props.date)} |&nbsp;</div>
            <button onClick={() => answerHelpful()} className="answer-meta-helpful">&nbsp;Helpful? <u>Yes({props.helpfulness})</u>&nbsp;&nbsp;|</button>
            <button onClick={() => reportAnswer()} className="answer-meta-report">&nbsp;<u>{report}</u></button>
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
            <button onClick={() => answerHelpful()} className="answer-meta-helpful">&nbsp;Helpful? <u>Yes({props.helpfulness})</u>&nbsp;&nbsp;|</button>
            <button onClick={() => reportAnswer()} className="answer-meta-report">&nbsp;<u>{report}</u></button>
          </div>
        </div>
      </div>
    );
  }
};

export default Answer;

