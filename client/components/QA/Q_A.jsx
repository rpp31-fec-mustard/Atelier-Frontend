import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import _ from 'underscore';

const Q_A = (props) => {

  console.log('QUESTIONS:', props.questions)
  var unsortedQuestions = _.sortBy(props.questions, 'question_helpfulness');
  var sortedQuestions = unsortedQuestions.reverse();

  console.log('SORTED QUESTIONS IN QA COMP:', sortedQuestions);



  return (
    <div>
      {sortedQuestions.map((question, answer) =>
      // console.log('Question:', question.question_body, 'Answer:', question.answers)
      <Question
        key={question.question_id}
        helpfulness={question.question_helpfulness}
        question={question.question_body}
        answer={[question.answers]}/>
      )}
    </div>
  )
}


export default Q_A;