import React, { useState } from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Related from '../client/components/Related/Related.jsx';

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

test('Related products and outfit creation module should render', () => {
  act(() => {
    render(<Related />, container);
  });
  const related = document.getElementById('related_main');
  expect(!!related).toBe(true);
});