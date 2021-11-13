import React from 'react';

const questionModal = (props) => {


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
              <div><textarea maxLength="1000" rows="3" cols="100" required></textarea></div>
            </div>
            <div className="add-question-nickname">
              <label>Your Username<sup>*</sup>: </label>
              <input type="text" maxLength="60" placeholder="Example: jackson11!" required></input>
              <div className="disclaimer"><label>For privacy reasons, do not use your full name or email address</label></div>
            </div>
            <div className="add-question-email">
              <label>Your Email<sup>*</sup>: </label>
              <input type="email" maxLength="60" placeholder="sample@email.com" required></input>
              <div className="disclaimer"><label>For authentication reasons, you will not be emailed</label></div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => props.hide()}>Submit Question</button>
        </div>
      </div>
    </div>
  );
};

export default questionModal;