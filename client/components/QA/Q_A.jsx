import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import _ from 'underscore';

const Q_A = (props) => {

  var unsortedQuestions = _.sortBy(props.questions, 'question_helpfulness');
  var sortedQuestions = unsortedQuestions.reverse();
  var displayQuestions = [];

  const [count, setCount] = useState(2);
  const addQuestion = () => {
    for (let i = 0; i < count; i++) {
      if (!sortedQuestions[i]) {
        return;
      }
      displayQuestions.push(sortedQuestions[i]);
    }
  };


  if (sortedQuestions.length > 0) {
    addQuestion();
  }

  if (sortedQuestions.length === 0) {
    return (
      <div className="questionButton">
        <button>Add Questions +</button>
      </div>
    );
  } else if (displayQuestions.length !== sortedQuestions.length) {
    return (
      <div>
        <div className="questionList">
          {displayQuestions.map((question, answer) =>
            <Question
              key={question.question_id}
              helpfulness={question.question_helpfulness}
              question={question.question_body}
              answer={[question.answers]}/>
          )}
        </div>
        <div className="questionButton">
          <button onClick={() => setCount(count + 2)}>More Questions</button>
          <button>Add Questions +</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="questionList">
          {displayQuestions.map((question, answer) =>
            <Question
              key={question.question_id}
              helpfulness={question.question_helpfulness}
              question={question.question_body}
              answer={[question.answers]}/>
          )}
        </div>
        <div className="questionButton">
          <button>Add Questions +</button>
        </div>
      </div>
    );
  }
};


export default Q_A;