import React, {useState} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import App from '../client/components/app.jsx';
import Reviews from '../client/components/Reviews/Reviews.jsx';
import Ratings from '../client/components/Reviews/Ratings.jsx';
import ReviewsList from '../client/components/Reviews/ReviewsList.jsx';
import ReviewsListEntry from '../client/components/Reviews/ReviewsListEntry.jsx';

Enzyme.configure({
  adapter: new Adapter()
});


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

let reviewsArr = [{
    reviewId: 1016925,
    rating: 5,
    summary: 'This product was great!',
    recommend: true,
    response: '',
    body: 'I really did or did not like this product based on whether it was sustainably sourced. Then I found out that its made from nothing at all.',
    date: '2019-01-01T00:00:00.000Z',
    reviewerName: 'funtime',
    helpfulness: 17,
    photos: []
  },
  {
    reviewId: 1016926,
    rating: 4,
    summary: 'This product was ok!',
    recommend: false,
    response: '',
    body: 'I really did not like this product solely because I am tiny and do not fit into it.',
    date: '2019-01-11T00:00:00.000Z',
    reviewerName: 'mymainstreammother',
    helpfulness: 2,
    photos: []
  },
  {
    reviewId: 1074951,
    rating: 5,
    summary: 'I love it!!',
    recommend: false,
    response: null,
    body: 'Just the best, I live for this product',
    date: '2021-10-30T00:00:00.000Z',
    reviewerName: 'Clayton',
    helpfulness: 0,
    photos: []
  },
  {
    reviewId: 1074950,
    rating: 5,
    summary: 'hello',
    recommend: false,
    response: null,
    body: 'a',
    date: '2021-10-30T00:00:00.000Z',
    reviewerName: 'Clayton',
    helpfulness: 0,
    photos: [Array]
  }
];

let meta = {
  product_id: '59553',
  ratings: {
    '4': '1',
    '5': '10'
  },
  recommended: {
    false: '3',
    true: '8'
  },
  characteristics: {
    Fit: [Object],
    Length: [Object],
    Comfort: [Object],
    Quality: [Object]
  }
};

test('Four module_containers should be rendering', () => {
  act(() => {
    render( < App / >, container);
  });
  const modules = document.getElementsByClassName('module_container');
  expect(modules.length).toBe(4);
});

describe('Reviews Component', () => {
  test('checks reviews component', () => {
    const wrapper = shallow( < Reviews / > );
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  test('checks reviews componentDidMount', () => {
    const spy = jest.spyOn(Reviews.prototype, 'componentDidMount');
    const wrapper = mount( < Reviews / > );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });

  test('test sortBy change', () => {
    const wrapper = shallow( < Reviews / > );
  });


  test('checks reviews api get call', () => {
    const spy = jest.spyOn(Reviews.prototype, 'get');
    const wrapper = mount( < Reviews / > );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });
});

describe('ReviewsList Component', () => {
  test('checks if ReviewsList renders', () => {
    const wrapper = shallow( < ReviewsList list = {reviewsArr}/>);
    expect(wrapper).toHaveLength(1);
  });

  test('checks if getMoreReviews function adjusts state', () => {
    const wrapper = shallow( < ReviewsList list = {reviewsArr}/>);
    wrapper.instance().getMoreReviews(); expect(wrapper.state('showing')).toEqual(4);
  });
});

describe('ReviewsListEntry Component', () => {
  test('checks if reviewsListEntry component renders', () => {
    const wrapper = mount( < ReviewsListEntry review = {reviewsArr[0]}/>);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Ratings Component', () => {
  test('checks if Ratings component renders', () => {
    const wrapper = shallow( < Ratings handleChange = {() => {}} meta = {meta}/>);
    expect(wrapper).toHaveLength(1);
  });
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});