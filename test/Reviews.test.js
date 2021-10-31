import React, { useState } from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import App from '../client/components/app.jsx';
import Reviews from '../client/components/Reviews/Reviews.jsx';
import ReviewsList from '../client/components/Reviews/ReviewsList.jsx';



let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
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

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});