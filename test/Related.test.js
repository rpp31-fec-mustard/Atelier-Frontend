import React, { useState } from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

import Related from '../client/components/Related/Related.jsx';

/* MOCK FUNCTIONS */
const getRelatedMock = jest.fn();

/* TESTS */
describe('Related products module: render tests', () => {
  const related = shallow(<Related />);
  test('Module should render', () => {
    expect(!!related).toBe(true);
  });

  test('Related products and Outfit submodules should render', () => {
  });

  test('At most four product cards should render in related products submodule', () => {
    // const related = shallow(<Related />);
    const productCards = document.getElementsByClassName('prod-card');
    expect(productCards.length).toBe(4);
  });

  test('Empty product card should render in outfit list when empty', () => {
  });
});