import React from 'react';
import Answer from './Answer.jsx';
import _ from 'underscore';


const Question = (props) => {
  var keys = [];
  var answers = [];
  props.answer.map((answer) => {
    keys = Object.keys(answer)
  })

  keys.map((id) => {
    console.log('singleAnswerID:', props.answer[0][id].id, 'singleAnswerHelpfulness', props.answer[0][id].helpfulness);
    answers.push(props.answer[0][id])
  })

  console.log('ANSWERS ARRAY IN QUESTION COMP:', answers)

  var sortedAnswers = _.sortBy(answers, 'helpfulness');
  console.log('SORTED ANSWERS IN QUESTION COMP:', sortedAnswers)

  // console.log('ANSWERS PROP IN QUESTION COMPONENT:', props.answer)


  if (keys.length === 0) {
    return (
      <div>
        <div>Q: {props.question}</div>
        <div>NO ANSWER</div>
      </div>
    )
  } else {
    return (
      <div>
        <div>Q: {props.question}</div>
        <div className="answer">
          A: {keys.map((id, i) =>
            <Answer key={i} id={id} answer={props.answer}/>
          )}
        </div>
      </div>
    )
  }

}



export default Question;