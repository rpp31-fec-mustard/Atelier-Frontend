import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Related from '../client/components/Related/Related.jsx';

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

describe('Related products module: render tests', () => {
  test('Module should render', () => {
    act(() => {
      render(<Related product={'59553'}/>, container);
    });
    const related = document.getElementById('related_main');
    expect(!!related).toBe(true);
  });

  test('4 product cards should render in related products', () => {
    act(() => {
      render(<Related />, container);
    });
    const productCards = document.getElementsByClassName('prod-card');
    expect(productCards.length).toBe(4);
  });

  test('Empty product card should render in outfit list if empty', () => {
    act(() => {
      render(<Related />, container);
    });
  });
});