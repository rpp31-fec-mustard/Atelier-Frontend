import React, { useState } from 'react';
import AnswerModalThumbnail from './AnswerModalThumbnails.jsx';

const answerModal = (props) => {
  const [thumbnails, setThumbnails] = useState([]);
  const [error, setError] = useState(null);

  const validateForm = () => {
    const answerBody = document.getElementById('answer-body');
    const answerUser = document.getElementById('answer-username');
    const answerEmail = document.getElementById('answer-email');
    const showError = document.getElementById('error');

    let errorMessage = [];
    if (answerBody.value === '' || answerBody.value === null) {
      errorMessage.push('Answer field is required');
    }
    if (answerBody.value.length > 1000) {
      errorMessage.push('1000 character limit exceeded');
    }
    if (answerUser.value === '' || answerUser.value === null) {
      errorMessage.push('Username is required');
    }
    if (answerUser.value.length > 60) {
      errorMessage.push('Username cannot exceed 60 characters');
    }
    var validateEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!validateEmail.test(answerEmail.value)) {
      errorMessage.push('Email is invalid');
    }
    if (answerEmail.value.length > 60) {
      errorMessage.push('Email cannot exceed 60 characters');
    }

    if (errorMessage.length > 0) {
      setError('You must enter the following: ' + errorMessage.join(', '));
    }
    if (errorMessage.length === 0) {
      setError([]);
    }

  };

  const photoThumbnail = () => {

    var file = document.querySelector('input[type=file').files[0];
    var reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      setThumbnails(thumbnails.concat(reader.result));
    };
  };

  if (!props.show) {
    return null;
  }
  if (thumbnails.length < 5) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="close-modal-button" onClick={()=> props.hide()}>X</div>
            <h4 className="modal-title">Submit Your Answer</h4>
            <div className="modal-subtitle">{props.name}: {props.question}</div>
          </div>
          <div className="modal-body">
            <form>
              <div className="add-answer-body">
                <label>Your Answer<sup>*</sup></label>
                <div><textarea id="answer-body" maxLength="1000" rows="3" cols="100" required></textarea></div>
              </div>
              <div className="add-answer-nickname">
                <label>Your Username<sup>*</sup>: </label>
                <input id="answer-username" type="text" maxLength="60" placeholder="Example: jack543!" required></input>
                <div className="disclaimer"><label>For privacy reasons, do not use your full name or email address</label></div>
              </div>
              <div className="add-answer-email">
                <label>Your Email<sup>*</sup>: </label>
                <input id="answer-email" type="email" maxLength="60" placeholder="jack@email.com" required></input>
                <div className="disclaimer"><label>For authentication reasons, you will not be emailed</label></div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div>
              <label>Attach Up To Five Photos</label>
              <input type="file" onChange={() => photoThumbnail()} accept="image/*" multiple></input>
            </div>
            <div>
              Attached Photos
              {thumbnails.map((src, i) =>
                <AnswerModalThumbnail key={i} src={src} />
              )}
            </div>
            <div id="error" className="error">{error}</div>
            <button className="modal-footer-button"onClick={() => validateForm()}>Submit Answer</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="close-modal-button" onClick={()=> props.hide()}>X</div>
            <h4 className="modal-title">Submit Your Answer</h4>
            <div className="modal-subtitle">{props.name}: {props.question}</div>
          </div>
          <div className="modal-body">
            <form>
              <div className="add-answer-body">
                <label>Your Answer<sup>*</sup></label>
                <div><textarea id="answer-body" maxLength="1000" rows="3" cols="100" required></textarea></div>
              </div>
              <div className="add-answer-nickname">
                <label>Your Username<sup>*</sup>: </label>
                <input id="answer-username" type="text" maxLength="60" placeholder="Example: jack543!" required></input>
                <div className="disclaimer"><label>For privacy reasons, do not use your full name or email address</label></div>
              </div>
              <div className="add-answer-email">
                <label>Your Email<sup>*</sup>: </label>
                <input id="answer-email" type="email" maxLength="60" placeholder="jack@email.com" required></input>
                <div className="disclaimer"><label>For authentication reasons, you will not be emailed</label></div>
              </div>
              <div>
                Attached Photos
                {thumbnails.map((src, i) =>
                  <AnswerModalThumbnail key={i} src={src} />
                )}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div id="error" className="error">{error}</div>
            <button className="modal-footer-button"onClick={() => validateForm()}>Submit Answer</button>
          </div>
        </div>
      </div>
    );
  }
};

export default answerModal;