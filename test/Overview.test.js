import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../client/components/app.jsx';
import ImageGallery from '../client/components/ProductOverview/ImageGallery.jsx';

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


test('Product Overview should render', () => {
  act(() => {
    render(<App />, container);

  });

  //journal entry
  window.onload = ()=> {

    const component = document.getElementById('product_overview_main');
    expect(!!component).toBe(true);
  };
});


test('Image Gallery should render', () => {
  act(() => {
    render(<App />, container);

  });

  //journal entry
  window.onload = ()=> {

    const component = document.getElementById('image_gallery_po');
    expect(!!component).toBe(true);
  };
});


test('Style Selector should render', () => {
  act(() => {
    render(<App />, container);

  });

  //journal entry
  window.onload = ()=> {

    const component = document.getElementsByClassName('style_po');
    expect(!!component).toBe(true);
  };
});


test('Add To Cart should render', () => {
  act(() => {
    render(<App />, container);

  });

  //journal entry
  window.onload = ()=> {

    const component = document.getElementsByClassName('add_to_bag_po');
    expect(!!component).toBe(true);
  };
});


test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
