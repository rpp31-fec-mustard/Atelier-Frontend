import React from 'react';

const answerModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Enter Your Answer</h4>
        </div>
        <div className="modal-body">Modal Content (Fill with form)</div>
        <div className="modal-footer">
          <button onClick={() => props.hide()}>Close or Submit Button</button>
        </div>
      </div>
    </div>
  );
};

export default answerModal;