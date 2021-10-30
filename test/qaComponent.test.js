import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../client/components/app.jsx';
import QA from '../client/components/QA/QA.jsx';
import Q_A from '../client/components/QA/Q_A.jsx';
import Search from '../client/components/QA/Search.jsx';
import Question from '../client/components/QA/Question.jsx';
import Answer from '../client/components/QA/Answer.jsx';


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

test('Four module_containers should be rendering', () => {
  act(() => {
    render(<App />, container);
  });
  const modules = document.getElementsByClassName('module_container');
  expect(modules.length).toBe(4);
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
    render(<Q_A />, container);
  });
  const component = document.getElementsByClassName('questionList');
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



test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});