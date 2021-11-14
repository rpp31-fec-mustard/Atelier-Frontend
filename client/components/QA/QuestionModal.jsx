import React, { useState } from 'react';

const questionModal = (props) => {

  const [error, setError] = useState(null);
  const validateForm = () => {
    const questionBody = document.getElementById('question-body');
    const questionUser = document.getElementById('question-username');
    const questionEmail = document.getElementById('question-email');
    const showError = document.getElementById('error');

    let errorMessage = [];
    if (questionBody.value === '' || questionBody.value === null) {
      errorMessage.push('Question field is required');
    }
    if (questionUser.value === '' || questionUser.value === null) {
      errorMessage.push('Username is required');
    }
    var validateEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!validateEmail.test(questionEmail.value)) {
      errorMessage.push('Email is invalid');
    }

    console.log('error message', errorMessage);

    if (errorMessage.length > 0) {
      setError('You must enter the following: ' + errorMessage.join(', '));
    }
    if (errorMessage.length === 0) {
      setError([]);
    }

  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close-modal-button" onClick={()=> props.hide()}>X</div>
          <h4 className="modal-title">Ask Your Question</h4>
          <h5 className="modal-subtitle">About the {props.name}</h5>
        </div>
        <div className="modal-body">
          <form>
            <div className="add-question-body">
              <label>Your Question<sup>*</sup></label>
              <div><textarea id="question-body" maxLength="1000" rows="3" cols="100" required></textarea></div>
            </div>
            <div className="add-question-nickname">
              <label>Your Username<sup>*</sup>: </label>
              <input id="question-username" type="text" maxLength="60" placeholder="Example: jackson11!" required></input>
              <div className="disclaimer"><label>For privacy reasons, do not use your full name or email address</label></div>
            </div>
            <div className="add-question-email">
              <label>Your Email<sup>*</sup>: </label>
              <input id="question-email" type="email" maxLength="60" placeholder="sample@email.com" required></input>
              <div className="disclaimer"><label>For authentication reasons, you will not be emailed</label></div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div id="error" className="error">{error}</div>
          <button onClick={() => validateForm()}>Submit Question</button>
        </div>
      </div>
    </div>
  );
};

export default questionModal;