import React from 'react';

const AnswerModalThumbnails = (props) => {

  return (
    <div>
      <img className="answer-thumbnail" src={props.src} alt="Image Preview"></img>
    </div>
  );
};

export default AnswerModalThumbnails;
