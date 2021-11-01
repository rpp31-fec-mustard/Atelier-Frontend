import React from 'react';
import Answer from './Answer.jsx';
import _ from 'underscore';


const Question = (props) => {
  var keys = [];
  var answers = [];
  props.answer.map((answer) => {
    keys = Object.keys(answer);
  });

  keys.map((id) => {
    answers.push(props.answer[0][id]);
  });

  var unsortedAnswers = _.sortBy(answers, 'helpfulness');
  for (var i = 0; i < unsortedAnswers.length; i ++) {
    if (unsortedAnswers[i].answerer_name === 'Seller') {
      unsortedAnswers.push(unsortedAnswers[i]);
      unsortedAnswers.splice(i, 1);
    }
  }

  var sortedAnswers = unsortedAnswers.reverse();

  if (keys.length === 0) {
    return (
      <div className="questionEntry">
        <div>Q: {props.question} <small>Helpful? Yes({props.helpfulness}) | Add Answer</small></div>
        <div>NO ANSWER</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="questionEntry">Q: {props.question} <small>Helpful? Yes({props.helpfulness}) | Add Answer</small></div>
        <div className="answer">
          A: {sortedAnswers.map((answer, i) =>
            <Answer
              key={i}
              name={answer.answerer_name}
              id={answer.id}
              answer={answer.body}
              date={answer.date}
              helpfulness={answer.helpfulness}
            />
          )}
        </div>
      </div>
    );
  }

};



export default Question;