// RESOURCES USED
// https://reactjs.org/docs/test-utils.html#isdomcomponent
// https://reactjs.org/docs/testing-recipes.html

import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../client/components/app.jsx';

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

describe('Tests for rendering', () => {
  test('Four module_containers should be rendering', () => {
    act(() => {
      render(<App />, container);
    });
    const modules = document.getElementsByClassName('module_container');
    expect(modules.length).toBe(4);
  });
});