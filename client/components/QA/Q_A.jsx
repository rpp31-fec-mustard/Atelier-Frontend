import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import _ from 'underscore';

const Q_A = (props) => {

  var unsortedQuestions = _.sortBy(props.questions, 'question_helpfulness');
  var sortedQuestions = unsortedQuestions.reverse();

  const [count, setCount] = useState(0);

  var displayQuestions = [];
  if (sortedQuestions.length > 0) {
    displayQuestions.push(sortedQuestions[count], sortedQuestions[count + 1]);
  }

  // useEffect(() => {
  //   if (sortedQuestions.length > 0) {
  //     setDisplayQuestion(sortedQuestions[count]);
  //     console.log('display in use effect:', displayQuestion);
  //   }
  // });

  console.log('sorted Questions:', sortedQuestions, 'displayQuestion', displayQuestions);

  return (
    <div className="questionList">
      {displayQuestions.map((question, answer) =>
      // console.log('Question:', question.question_body, 'Answer:', question.answers)
        <Question
          key={question.question_id}
          helpfulness={question.question_helpfulness}
          question={question.question_body}
          answer={[question.answers]}/>
      )}
      <button>More Questions</button>
      <button>Add Questions +</button>
    </div>
  );
};


export default Q_A;