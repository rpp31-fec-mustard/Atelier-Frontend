import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

// import App from '../client/components/app.jsx';
import QA from '../client/components/QA/QA.jsx';
import Q_A from '../client/components/QA/Q_A.jsx';
import Search from '../client/components/QA/Search.jsx';
import Question from '../client/components/QA/Question.jsx';
import Answer from '../client/components/QA/Answer.jsx';
import AnswerList from '../client/components/QA/AnswerList.jsx';
import QuestionList from '../client/components/QA/QuestionList.jsx';
import QuestionModal from '../client/components/QA/QuestionModal.jsx';
import AnswerModal from '../client/components/QA/AnswerModal.jsx';
import fixtures from './fixtures.js';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Rendering Components', () => {
  test('renders QA Component', () => {
    act(() => {
      render(<QA product='testing' productInfo='testing'/>, container);
    });
    const component = document.getElementsByClassName('module_container');
    expect(component.length).toBe(1);
  });

  test('renders Search Component', () => {
    act(() => {
      render(<Search />, container);
    });
    const component = document.getElementsByClassName('search');
    expect(component.length).toBe(1);
  });

  test('renders Q_A Component', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product}/>, container);
    });
    const component = document.getElementsByClassName('questionButton');
    expect(component.length).toBe(1);
  });

  test('renders QuestionModal Component', () => {
    act(() => {
      render(<QuestionModal show={true}/>, container);
    });
    const component = document.getElementsByClassName('add-question-body');
    expect(component.length).toBe(1);
  });

  test('renders Question Component', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const component = document.getElementsByClassName('questionEntry');
    expect(component.length).toBe(2);
  });

  test('renders QuestionList Component', () => {
    act(() => {
      render(<QuestionList />, container);
    });
    const component = document.getElementsByClassName('questionEntry');
    expect(component.length).toBe(1);
  });

  test('renders AnswerList Component', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const component = document.getElementsByClassName('answer');
    expect(component.length).toBe(2);
  });

  test('renders AnswerModal Component', () => {
    act(() => {
      render(<AnswerModal show={true}/>, container);
    });
    const component = document.getElementsByClassName('add-answer-body');
    expect(component.length).toBe(1);
  });

  test('renders Answer Component', () => {
    act(() => {
      render(<Answer photos={[]}/>, container);
    });
    const component = document.getElementsByClassName('singleAnswer');
    expect(component.length).toBe(1);
  });
});


describe('Integration Tests', () => {

  test('only button to add question shows if there are no questions', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={[]}/>, container);
    });
    const questionButton = document.getElementsByClassName('questionButton');
    expect(questionButton[0].innerHTML).toBe('Add Questions +');
    expect(questionButton.length).toBe(1);
  });

  test('renders add question button and question list if questions exist', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const questionButton = document.getElementsByClassName('questionButton');
    expect(questionButton[0].innerHTML).toBe('More Questions');
    expect(questionButton[1].innerHTML).toBe('Add Questions +');
    expect(questionButton.length).toBe(2);
  });

  test('renders only two questions and two answers per question on load', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const questionEntry = document.getElementsByClassName('questionEntry');
    const singleAnswer = document.getElementsByClassName('singleAnswer');
    expect(questionEntry.length).toBe(2);
    expect(singleAnswer.length).toBe(4);
  });

  test('loads two more questions when More Questions button is clicked', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const questionButton = document.getElementsByClassName('questionButton');
    const questionEntry = document.getElementsByClassName('singleQuestion');
    expect(questionEntry.length).toBe(2);
    expect(questionButton[0].innerHTML).toBe('More Questions');

    act(() => {
      questionButton[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(questionEntry.length).toBe(4);
  });

  test('answer modal should show when add answer is clicked', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const addAnswerButton = document.getElementsByClassName('addAnswer');

    act(() => {
      addAnswerButton[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const modal = document.getElementsByClassName('add-answer-body');
    expect(modal.length).toBe(1);

  });

  test('error message should show when answer modal requirements have not been met', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const addAnswerButton = document.getElementsByClassName('addAnswer');

    act(() => {
      addAnswerButton[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const modal = document.getElementsByClassName('add-answer-body');
    expect(modal.length).toBe(1);
    const submitButton = document.getElementsByClassName('modal-footer-button');
    expect(submitButton[0].innerHTML).toBe('Submit Answer');

    act(() => {
      submitButton[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const error = document.getElementsByClassName('error');
    expect(error.length).toBe(1);
    expect(error[0].innerHTML).toBe('You must enter the following: Answer field is required, Username is required, Email is invalid');
  });

  test('question modal should show when add question is clicked', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const addQuestionButton = document.getElementsByClassName('questionButton');
    expect(addQuestionButton[1].innerHTML).toBe('Add Questions +');

    act(() => {
      addQuestionButton[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const questionModal = document.getElementsByClassName('add-question-body');
    expect(questionModal.length).toBe(1);
  });

  test('error message should how when question modal requirements have not been met', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const addQuestionButton = document.getElementsByClassName('questionButton');
    expect(addQuestionButton[1].innerHTML).toBe('Add Questions +');

    act(() => {
      addQuestionButton[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const questionModal = document.getElementsByClassName('add-question-body');
    expect(questionModal.length).toBe(1);
    const submitButton = document.getElementsByClassName('modal-footer-button');
    expect(submitButton[0].innerHTML).toBe('Submit Question');

    act(() => {
      submitButton[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const error = document.getElementsByClassName('error');
    expect(error.length).toBe(1);
    expect(error[0].innerHTML).toBe('You must enter the following: Question field is required, Username is required, Email is invalid');
  });
});






