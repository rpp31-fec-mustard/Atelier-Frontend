import React, { useState, useEffect } from 'react';
import { useTracking } from 'react-tracking';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import _ from 'underscore';
import axios from 'axios';

const Q_A = (props) => {

  var unsortedQuestions = _.sortBy(props.questions, 'question_helpfulness');
  var sortedQuestions = unsortedQuestions.reverse();
  var displayQuestions = [];

  const [count, setCount] = useState(2);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(props.filter);
  const [productInfo, setProductInfo] = useState(props.productInfo);
  const closeModal = () => {
    setShow(false);
  };
  const { Track, trackEvent } = useTracking({},
    { dispatch: data => {
      axios.post('/interactions', {
        time: data.time,
        element: data.element,
        widget: data.widget
      })
        .catch((error) => {
          console.log('Client unable to post interaction: ', error);
        });
    }});

  var checkFilter = (sortedQuestions) => {
    var splitFilter = [];
    var filteredQuestions = [];
    if (filter.length > 2 && !filter.includes(' ')) {
      splitFilter = filter.split();
    }
    if (filter.includes(' ')) {
      splitFilter = filter.split(' ');
    }
    if (_.contains(splitFilter, '')) {
      splitFilter = _.without(splitFilter, '');
    }

    for (let i = 0; i < sortedQuestions.length; i++) {
      for (let j = 0; j < splitFilter.length; j++) {
        var lowerCase = sortedQuestions[i].question_body.toLowerCase();
        if (lowerCase.includes(splitFilter[j])) {
          filteredQuestions.push(sortedQuestions[i]);
        }
      }
    }
    filteredQuestions = _.uniq(filteredQuestions);
    if (filteredQuestions.length > 0) {
      return filteredQuestions;
    } else {
      return sortedQuestions;
    }
  };

  const addQuestion = () => {
    sortedQuestions = checkFilter(sortedQuestions);
    for (let i = 0; i < count; i++) {
      if (!sortedQuestions[i]) {
        return;
      }
      displayQuestions.push(sortedQuestions[i]);
    }
  };

  useEffect(() => {
    setFilter(props.filter);
    if (productInfo !== props.productInfo) {
      setCount(2);
      setProductInfo(props.productInfo);
    }
  });

  if (sortedQuestions.length > 0) {
    addQuestion();
  }

  if (displayQuestions.length === 0) {
    return (
      <Track>
        <div className="questionButtonContainer">
          <button className="questionButton" onClick={() => setShow(true)}>Add Questions +</button>
          <QuestionModal show={show} hide={closeModal} name={props.productInfo.name} productId={props.product} update={props.update}/>
        </div>
      </Track>
    );
  } else if (displayQuestions.length !== sortedQuestions.length) {
    return (
      <Track>
        <div className="questionDisplay">
          <div className="questionList">
            {displayQuestions.map((question, answer) =>
              <Question
                key={question.question_id}
                id={question.question_id}
                helpfulness={question.question_helpfulness}
                question={question.question_body}
                answer={[question.answers]}
                name={props.productInfo.name}
                update={props.update}
                darkMode={props.darkMode}
              />
            )}
          </div>
          <div className="questionButtonContainer">
            <button className="questionButton" onClick={() => setCount(count + 2)}>More Questions</button>
            <button className="questionButton" onClick={() => setShow(true)}>Add Questions +</button>
            <QuestionModal show={show} hide={closeModal} name={props.productInfo.name} productId={props.product} update={props.update}/>
          </div>
        </div>
      </Track>
    );
  } else {
    return (
      <Track>
        <div className="questionDisplay">
          <div className="questionList">
            {displayQuestions.map((question, answer) =>
              <Question
                key={question.question_id}
                id={question.question_id}
                helpfulness={question.question_helpfulness}
                question={question.question_body}
                answer={[question.answers]}
                name={props.productInfo.name}
                update={props.update}
                darkMode={props.darkMode}
              />
            )}
          </div>
          <div className="questionButtonContainer">
            <button className="questionButton" onClick={() => setShow(true)}>Add Questions +</button>
            <QuestionModal show={show} hide={closeModal} name={props.productInfo.name} productId={props.product} update={props.update}/>
          </div>
        </div>
      </Track>
    );
  }
};


export default Q_A;