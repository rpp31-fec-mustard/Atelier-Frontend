import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { withHooks } from 'jest-react-hooks-shallow';
import axios from 'axios';

// components
import Related from '../client/components/Related/Related.jsx';
import RelatedProducts from '../client/components/Related/RelatedProducts.jsx';

// fixtures
import * as fixtures from './fixtures.js';

//NOAH test spy was called

/* TESTS */

describe('Related products module: render tests', () => {
  describe('<RelatedProducts />', () => {
    beforeEach(() => {
      jest.spyOn(axios, 'post').mockImplementation((endpoint, options) => {
        switch (endpoint) {
        case '/related':
          return Promise.resolve({ data: fixtures.relatedProducts });
        default:
          const error = new Error(`ENDPOINT[${endpoint}] MUST BE MOCKED`);
          console.error({ error });
        }
      });
    });

    test('<RelatedProducts /> should receive a list of relatedProducts on render', () => {
      withHooks(() => {
        const related = shallow(<Related productId={'59601'}/>);
        return Promise.resolve().then(() => {
          expect(related.find(RelatedProducts).props().relatedProducts).toBe(fixtures.relatedProducts);
        });
      });
    });
  });

  test('Related products and Outfit submodules should render', () => {
  });

  test('At most four product cards should render in related products submodule', () => {
  });

  test('Empty product card should render in outfit list when empty', () => {
  });
});