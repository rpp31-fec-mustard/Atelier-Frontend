import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { withHooks } from 'jest-react-hooks-shallow';
import axios from 'axios';

// components
import Related from '../client/components/Related/Related.jsx';
import RelatedProducts from '../client/components/Related/RelatedProducts.jsx';
import Outfit from '../client/components/Related/Outfit.jsx';

// fixtures
import * as fixtures from './fixtures.js';

/* TESTS */

describe('Related products module: render tests', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'post').mockImplementation((endpoint, options) => {
      switch (endpoint) {
      case '/related':
        return Promise.resolve({ data: fixtures.default.relatedProducts });
      default:
        const error = new Error(`ENDPOINT[${endpoint}] MUST BE MOCKED`);
        console.error({ error });
      }
    });
  });

  describe('<RelatedProducts />', () => {
    test('<RelatedProducts /> should render', () => {
      const related = shallow(<Related productId={'59601'}/>);
      expect(related.children().childAt(0).name()).toBe('RelatedProducts');
    });

    test('<RelatedProducts /> should render no cards if no relatedProducts', () => {
      const relatedProducts = shallow(<RelatedProducts
        productId={'59601'}
        relatedProducts={[]}
        handleAction={()=>{}}
        handleScroll={{handleLeftScroll: ()=>{}, handleRightScroll: ()=>{}}}
        checkScrollPosition={()=>{}}
        homeProduct={{}}
        renderRelated={()=>{}}
      />);

      expect(relatedProducts.find('.prod-cards-wrapper').children()).toHaveLength(0);
    });

    test('<RelatedProducts /> should render a list of relatedProducts cards', () => {
      const relatedProducts = shallow(<RelatedProducts
        productId={'59601'}
        relatedProducts={fixtures.default.relatedProducts}
        handleAction={()=>{}}
        handleScroll={{handleLeftScroll: ()=>{}, handleRightScroll: ()=>{}}}
        checkScrollPosition={()=>{}}
        homeProduct={{}}
        renderRelated={()=>{}}
      />);

      expect(relatedProducts.find('.prod-cards-wrapper').children()).toHaveLength(7);
    });

  });

  describe('<Outfit />', () => {

    test('<Outfit /> should render', () => {
      const related = shallow(<Related productId={'59601'}/>);
      expect(related.children().childAt(1).name()).toBe('Outfit');
    });

    test('<Outfit /> should render "Add product" card if empty outfitList', () => {
      const outfit = shallow(<Outfit
        outfitList={[]}
        handleAction={()=>{}}
        handleScroll={{handleLeftScroll: ()=>{}, handleRightScroll: ()=>{}}}
        checkScrollPosition={()=>{}}
        renderRelated={()=>{}}
      />);

      expect(outfit.find('.add-product')).toBeTruthy();
    });

    test('<Outfit /> should render "Add product" card if empty outfitList', () => {
      const outfit = shallow(<Outfit
        outfitList={fixtures.default.outfitList}
        handleAction={()=>{}}
        handleScroll={{handleLeftScroll: ()=>{}, handleRightScroll: ()=>{}}}
        checkScrollPosition={()=>{}}
        renderRelated={()=>{}}
      />);

      // console.log(outfit.debug());

      expect(outfit.find('.add-product')).toEqual({});
      expect(outfit.find('.prod-cards-wrapper').children()).toHaveLength(2);
    });
  });
});