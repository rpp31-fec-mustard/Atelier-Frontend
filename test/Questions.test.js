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

// test('Four module_containers should be rendering', () => {
//   act(() => {
//     render(<App />, container);
//   });
//   const modules = document.getElementsByClassName('module_container');
//   expect(modules.length).toBe(4);
// });

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
      render(<Question key="1" helpfulness="5" question="Does this test work?" answer={['I hope so']}/>, container);
    });
    const component = document.getElementsByClassName('questionEntry');
    expect(component.length).toBe(1);
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
      render(<AnswerList displayAnswers={['testing render of answer list']} />, container);
    });
    const component = document.getElementsByClassName('answer');
    expect(component.length).toBe(1);
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
      render(<Answer />, container);
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
    const questionList = document.getElementsByClassName('questionList');
    expect(questionButton.length).toBe(1);
    expect(questionList.length).toBe(0);
  });

  test('renders add question button and question list if questions exist', () => {
    act(() => {
      render(<Q_A productInfo={fixtures.product} questions={fixtures.questions} filter=''/>, container);
    });
    const questionButton = document.getElementsByClassName('questionButton');
    const questionList = document.getElementsByClassName('questionList');
    expect(questionButton.length).toBe(1);
    expect(questionList.length).toBe(1);
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

  // test('QA Functionality', () => {
  //   act(() => {
  //     render(<QA product={59554} productInfo={fixtures.product}/>, container);
  //   });
  //   const moduleContainer = document.getElementsByClassName('module_container');
  //   expect(moduleContainer.length).toBe(1);
  // });
});






