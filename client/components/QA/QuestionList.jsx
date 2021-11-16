import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';

const QuestionList = (props) => {
  const [modal, setModal] = useState(false);
  const hideModal = () => {
    setModal(false);
  };

  const questionHelpful = () => {
    axios.put('/questionHelpful', {
      questionId: props.id
    })
      .then(() => {
        props.update();
      })
      .catch((err) => {
        console.log('ERROR UPDATING QUESTION HELPFUL');
      });
  };

  return (
    <div className="questionEntry">
      <div className="singleQuestion">
        Q: {props.question}
      </div>
      <div className="question-meta">
        <button onClick={() => questionHelpful()} className="questionHelpful">Helpful?&nbsp;<u>Yes({props.helpfulness})</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</button>
        <button className="addAnswer" onClick={() => setModal(true)}>Add Answer</button>
        <AnswerModal show={modal} hide={hideModal} question={props.question} name ={props.name} id={props.id} update={props.update}/>
      </div>
    </div>
  );
};

export default QuestionList;