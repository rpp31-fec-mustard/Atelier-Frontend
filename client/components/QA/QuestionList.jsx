import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';

const QuestionList = (props) => {
  const [modal, setModal] = useState(false);
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className="questionEntry">Q: {props.question}
      <div className="questionHelpful">Helpful? Yes({props.helpfulness}) |</div>
      <div className="addAnswer" onClick={() => setModal(true)}>Add Answer</div>
      <AnswerModal show={modal} hide={hideModal} question={props.question} name ={props.name}/>
    </div>
  );
};

export default QuestionList;