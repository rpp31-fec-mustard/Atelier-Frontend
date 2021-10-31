import React, { useState, useEffect } from 'react';
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

  console.log('sorted answers:', sortedAnswers);
  var displayAnswers = [];

  const [count, setCount] = useState(2);

  const addAnswers = () => {
    console.log('count:', count);
    for (var i = 0; i < count; i++) {
      if (!sortedAnswers[i]) {
        return;
      }
      displayAnswers.push(sortedAnswers[i]);
    }
  };

  if (sortedAnswers.length > 0) {
    addAnswers();
  }

  console.log('display answers:', displayAnswers);




  if (displayAnswers.length === 0) {
    return (
      <div className="questionEntry">
        <div>Q: {props.question} <small>Helpful? Yes({props.helpfulness}) | Add Answer</small></div>
        <div>NO ANSWER</div>
      </div>
    );
  } else if (displayAnswers.length < sortedAnswers.length) {
    return (
      <div>
        <div className="questionEntry">Q: {props.question} <small>Helpful? Yes({props.helpfulness}) | Add Answer</small></div>
        <div className="answer">
          A: {displayAnswers.map((answer, i) =>
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
        <button onClick={() => setCount(count + 2)}>Load More Answers</button>
      </div>
    );
  } else if (displayAnswers.length === sortedAnswers.length) {
    return (
      <div>
        <div className="questionEntry">Q: {props.question} <small>Helpful? Yes({props.helpfulness}) | Add Answer</small></div>
        <div className="answer">
          A: {displayAnswers.map((answer, i) =>
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
        <button>Collapse Answers</button>
      </div>
    );
  }

};



export default Question;