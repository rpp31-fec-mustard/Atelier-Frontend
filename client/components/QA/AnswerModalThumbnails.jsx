import React from 'react';

const AnswerModalThumbnails = (props) => {

  return (
    <div>
      <img className="answer-thumbnail" width="50" height="50" src={props.src} alt="Image Preview"></img>
    </div>
  );
};

export default AnswerModalThumbnails;
