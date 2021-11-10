import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import axios from 'axios';

import App from '../client/components/app.jsx';
import QA from '../client/components/QA/QA.jsx';
import Q_A from '../client/components/QA/Q_A.jsx';
import Search from '../client/components/QA/Search.jsx';
import Question from '../client/components/QA/Question.jsx';
import Answer from '../client/components/QA/Answer.jsx';
import QuestionList from '../client/components/QA/QuestionList.jsx';
import AnswerList from '../client/components/QA/AnswerList.jsx';
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

describe('Q&A Module: render tests', () => {
  test('renders Search Component', () => {
    act(() => {
      render(<Search />, container);
    });
    const component = document.getElementsByClassName('search');
    expect(component.length).toBe(1);
  });

  test('renders Q_A Component', () => {
    act(() => {
      render(<Q_A productInfo={{name: 'name'}}/>, container);
    });
    const component = document.getElementsByClassName('questionButton');
    expect(component.length).toBe(1);
  });

  test('renders Question Component', () => {
    act(() => {
      render(<Question key="1" helpfulness="5" question="Does this test work?" answer={['I hope so']}/>, container);
    });
    const component = document.getElementsByClassName('questionEntry');
    expect(component.length).toBe(1);
  });

  test('renders Answer Component', () => {
    act(() => {
      render(<Answer />, container);
    });
    const component = document.getElementsByClassName('singleAnswer');
    expect(component.length).toBe(1);
  });

  test('renders AnswerList', () => {
    act(() => {
      render(<AnswerList />, container);
    });
    const component = document.getElementsByClassName('answer');
    expect(component.length).toBe(1);
  });

  test('renders QA Component', () => {
    act(() => {
      render(<QA />, container);
    });
    const component = document.getElementsByClassName('module_container');
    expect(component.length).toBe(1);
  });

  test('renders QuestionList Component', () => {
    act(() => {
      render(<QuestionList />, container);
    });
    const component = document.getElementsByClassName('questionEntry');
    expect(component.length).toBe(1);
  });

  // test('renders AnswerModal Component', () => {
  //   act(() => {
  //     render(<Answer />, container);
  //   });
  //   const component = document.getElementsByClassName('singleAnswer');
  //   expect(component.length).toBe(1);
  // });

  // test('renders QuestionModal Component', () => {
  //   act(() => {
  //     render(<Answer />, container);
  //   });
  //   const component = document.getElementsByClassName('singleAnswer');
  //   expect(component.length).toBe(1);
  // });

});





