import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { withHooks } from 'jest-react-hooks-shallow';
import axios from 'axios';

// components
import Related from '../client/components/Related/Related.jsx';
import RelatedProducts from '../client/components/Related/RelatedProducts.jsx';
import Outfit from '../client/components/Related/Outfit.jsx';
import ProductCard from '../client/components/Related/ProductCard.jsx';

// global components
import Price from '../client/components/Global/Price.jsx';

// fixtures
import * as fixtures from './fixtures.js';

// helper functions
const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
  });
};

/* TESTS */

describe('Render Components', () => {
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

    test('<RelatedProducts /> should render a left and right navigation button', () => {
      const relatedProducts = shallow(<RelatedProducts
        productId={'59601'}
        relatedProducts={fixtures.default.relatedProducts}
        handleAction={()=>{}}
        handleScroll={{handleLeftScroll: ()=>{}, handleRightScroll: ()=>{}}}
        checkScrollPosition={()=>{}}
        homeProduct={{}}
        renderRelated={()=>{}}
      />);

      expect(relatedProducts.find('.related-submodule-content').childAt(0).name()).toBe('LeftButton');
      expect(relatedProducts.find('.related-submodule-content').childAt(2).name()).toBe('RightButton');
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

      expect(outfit.find('.add-product')).toEqual({});
      expect(outfit.find('.prod-cards-wrapper').children()).toHaveLength(2);
    });

    test('<Outfit /> should render a left and right navigation button', () => {
      const outfit = shallow(<Outfit
        outfitList={fixtures.default.outfitList}
        handleAction={()=>{}}
        handleScroll={{handleLeftScroll: ()=>{}, handleRightScroll: ()=>{}}}
        checkScrollPosition={()=>{}}
        renderRelated={()=>{}}
      />);

      expect(outfit.find('.related-submodule-content').childAt(0).name()).toBe('LeftButton');
      expect(outfit.find('.related-submodule-content').childAt(2).name()).toBe('RightButton');
    });
  });

  describe('<ProductCard />', () => {
    let productCard;
    const testProduct = fixtures.default.relatedProducts[0];

    test('<ProductCard /> should render a warning when no image', () => {
      testProduct.thumbnailUrl = null;
      productCard = shallow(<ProductCard
        key={'59601'}
        handleAction={()=>{}}
        product={testProduct}
        homeProduct={{}}
        renderRelated={()=>{}}
      />);

      expect(productCard.find('.prod-card-no-img')).toBeTruthy();
      expect(productCard.find('.prod-card-img')).toEqual({});
    });

    beforeEach(() => {
      productCard = shallow(<ProductCard
        key={'59601'}
        handleAction={()=>{}}
        product={testProduct}
        homeProduct={{}}
        renderRelated={()=>{}}
      />);
    });

    test('<ProductCard /> should render an image', () => {
      expect(productCard.find('.prod-card-img')).toBeTruthy();
    });

    test('<ProductCard /> should render a category', () => {
      expect(productCard.find('.prod-card-category')).toBeTruthy();
    });

    test('<ProductCard /> should render a name', () => {
      expect(productCard.find('.prod-card-name')).toBeTruthy();
    });

    test('<ProductCard /> should render a price', () => {
      expect(productCard.find(Price)).toBeTruthy();
    });

    test('<ProductCard /> should render a rating', () => {
      expect(productCard.find('.prod-card-rating')).toBeTruthy();
    });
  });
});

describe('Interact with Components', () => {
  describe('<ActionButton/>', () => {
    // initialize test state
    let testState, testProduct, productCard;
    testState = {
      relatedProducts: fixtures.default.relatedProducts,
      outfitList: fixtures.default.outfitList
    };
    testProduct = testState.relatedProducts[0];

    // write mock action button click handler
    const mockHandleAction = jest.fn((event) => {
      const targetProductId = event.target.productId;

      if (event.target.class === 'ri-star-fill') {
        // add to outfit list
        const newRelatedProducts = testState.relatedProducts.map((product) => {
          const productId = product.id.toString(10);
          if (productId === targetProductId) {
            // updateState with outfit list
            const newOutfitList = testState.outfitList.concat([product]);

            testState.outfitList = newOutfitList;
            console.log(testState);
            return product;
          } else {
            return product;
          }
        });

        testState.relatedProducts = newRelatedProducts;
      } else {
        console.log('REMOVE FROM LIST');
        // remove from outfit list
        // const newOutfitList = outfitList.filter((product) => {
        //   const productId = product.id.toString(10);
        //   return productId !== targetProductId;
        // });

        // setOutfitList(newOutfitList);

        // const newRelatedProducts = relatedProducts.map((product) => {
        //   const productId = product.id.toString(10);
        //   if (productId === targetProductId) {
        //     product['starred'] = false;
        //     return product;
        //   } else {
        //     return product;
        //   }
        // });

        // setRelatedProducts(newRelatedProducts);
      }
    });

    beforeEach(() => {
      // initialize clean testState

      // mock /getRating endpoing
      jest.spyOn(axios, 'post').mockImplementation((endpoint, options) => {
        switch (endpoint) {
        case '/getRating':
          return Promise.resolve({ data: '3' });
        default:
          const error = new Error(`ENDPOINT[${endpoint}] MUST BE MOCKED`);
          console.error({ error });
        }
      });

      productCard = mount(<ProductCard
        key={'59601'}
        handleAction={mockHandleAction}
        product={testProduct}
        homeProduct={fixtures.default.product}
        renderRelated={()=>{}}
      />);

      waitForComponentToPaint(productCard);
    });

    test('handleAction should be called when Action button is clicked', () => {
      productCard.find('.action-button').simulate('click', {
        target: {
          class: 'ri-star-fill',
          productId: testProduct.id
        }
      });

      expect(mockHandleAction).toHaveBeenCalled();
    });
  });
});