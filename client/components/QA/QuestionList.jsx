import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';

const QuestionList = (props) => {
  const [modal, setModal] = useState(false);
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className="questionEntry">
      <div className="singleQuestion">
        Q: {props.question}
      </div>
      <div className="question-meta">
        <button className="questionHelpful">Helpful?&nbsp;<u>Yes({props.helpfulness})</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</button>
        <button className="addAnswer" onClick={() => setModal(true)}>Add Answer</button>
        <AnswerModal show={modal} hide={hideModal} question={props.question} name ={props.name}/>
      </div>
    </div>
  );
};

export default QuestionList;