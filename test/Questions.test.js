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
import MockedModal from '../client/components/QA/AnswerModal.jsx';
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

});

describe('Q&A Module: integration tests', () => {


  // test('shouold render question', () => {
  //   act(() => {
  //     render(<QuestionList question="Does this work?" helpfulness="5" name="test shoes"/>, container);
  //   });
  //   const questionEntry = document.getElementsByClassName('questionEntry');
  //   const questionHelpful = container.querySelector('questionHelpful');
  //   // expect(questionEntry.textContent).toEqual('Does this work?');
  //   // expect(questionHelpful.textContent).toEqual('Helpful? Yes(5) |');
  //   expect(container.textConent).toContain('5');

  jest.mock('../client/components/QA/AnswerModal.jsx', () => {
    return function DummyModal(props) {
      return (
        <div data-testid="modal">
          {props.name}
        </div>
      )
    }
  });

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

test('loads dummy data', () => {
  const name = "test shoes"
  act(() => {
    render (
      <QuestionList question="Does this work?" helpfulness="5" name={name}/>, container
    )
  })
  expect(container.querySelector('questionEntry').textContent).toContain('Does this work?')
})


});



