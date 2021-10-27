import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import _ from 'underscore';

const Q_A = (props) => {

  console.log('QUESTIONS:', props.questions)
  var sortedQuestions = _.sortBy(props.questions, 'question_helpfulness');
  console.log('SORTED:', sortedQuestions)




  return (
    <div>
      {props.questions.map((question, answer) =>
      // console.log('Question:', question.question_body, 'Answer:', question.answers)
      <Question key={question.question_id} question={question.question_body} answer={[question.answers]}/>
      )}
    </div>
  )
}


export default Q_A;