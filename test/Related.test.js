import React, { useState } from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

import Related from '../client/components/Related/Related.jsx';

describe('Related products module: render tests', () => {
  test('Module should render', () => {
    const related = shallow(<Related />);
    expect(!!related).toBe(true);
  });

  test('Four product cards should render in related products', () => {
    const related = shallow(<Related />);
    const productCards = document.getElementsByClassName('prod-card');
    expect(productCards.length).toBe(4);
  });

  test('Empty product card should render in outfit list if empty', () => {
    const related = shallow(<Related />);
  });
});