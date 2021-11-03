import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import AnswerModal from './AnswerModal.jsx';
import _ from 'underscore';


const Question = (props) => {

  const [count, setCount] = useState(2);
  const [modal, setModal] = useState(false);
  const hideModal = () => {
    setModal(false);
  };
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
  var displayAnswers = [];

  const addAnswers = () => {
    for (let i = 0; i < count; i++) {
      if (!sortedAnswers[i]) {
        return;
      }
      displayAnswers.push(sortedAnswers[i]);
    }
  };

  if (sortedAnswers.length > 0) {
    addAnswers();
  }

  if (displayAnswers.length === 0) {
    return (
      <div>
        <div className="questionEntry">Q: {props.question}
          <div className="questionHelpful">Helpful? Yes({props.helpfulness}) |</div>
          <div className="addAnswer" onClick={() => setModal(true)}>Add Answer</div>
          <AnswerModal show={modal} hide={hideModal}/>
        </div>
      </div>
    );
  } else if (displayAnswers.length < sortedAnswers.length) {
    return (
      <div>
        <div className="questionEntry">Q: {props.question}
          <div className="questionHelpful">Helpful? Yes({props.helpfulness}) |</div>
          <div className="addAnswer" onClick={() => setModal(true)}>Add Answer</div>
          <AnswerModal show={modal} hide={hideModal}/>
        </div>
        <div className="answer"> A:
          <div className="answerEntry">
            {displayAnswers.map((answer, i) =>
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
        <div className="expandCollapseAnswers" onClick={() => setCount(sortedAnswers.length)}><small>LOAD MORE ANSWERS</small></div>
      </div>
    );
  } else if ((displayAnswers.length === sortedAnswers.length) && sortedAnswers.length !== 2) {
    return (
      <div>
        <div className="questionEntry">Q: {props.question}
          <div className="questionHelpful">Helpful? Yes({props.helpfulness}) |</div>
          <div className="addAnswer" onClick={() => setModal(true)}>Add Answer</div>
          <AnswerModal show={modal} hide={hideModal}/>
        </div>
        <div className="answer"> A:
          <div className="answerEntry">
            {displayAnswers.map((answer, i) =>
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
        <div className="expandCollapseAnswers" onClick={() => setCount(2)}><small>COLLAPSE ANSWERS</small></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="questionEntry">Q: {props.question}
          <div className="questionHelpful">Helpful? Yes({props.helpfulness}) |</div>
          <div className="addAnswer" onClick={() => setModal(true)}>Add Answer</div>
          <AnswerModal show={modal} hide={hideModal}/>
        </div>
        <div className="answer"> A:
          <div className="answerEntry">
            {displayAnswers.map((answer, i) =>
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
      </div>
    );
  }
};

export default Question;