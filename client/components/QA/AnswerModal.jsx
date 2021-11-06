import React from 'react';

const answerModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Submit Your Answer</h4>
          <h5>{props.name}: {props.question}</h5>
        </div>
        <div className="modal-body">
          <form>
            <div className="add-answer-body">
              <label>Your Answer<sup>*</sup></label>
              <div><textarea maxLength="1000" rows="3" cols="70" required></textarea></div>
            </div>
            <div className="add-answer-nickname">
              <label>Your Username<sup>*</sup>: </label>
              <input type="text" maxLength="60" placeholder="Example: jack543!" required></input>
              <div className="disclaimer"><label>For privacy reasons, do not use your full name or email address</label></div>
            </div>
            <div className="add-answer-email">
              <label>Your Email<sup>*</sup>: </label>
              <input type="email" maxLength="60" placeholder="jack@email.com" required></input>
              <div className="disclaimer"><label>For authentication reasons, you will not be emailed</label></div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => props.hide()}>Close or Submit Button</button>
        </div>
      </div>
    </div>
  );
};

export default answerModal;