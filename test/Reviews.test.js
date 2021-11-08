import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { withHooks } from 'jest-react-hooks-shallow';
import axios from 'axios';

// import App from '../client/components/app.jsx';
import Reviews from '../client/components/Reviews/Reviews.jsx';
import Ratings from '../client/components/Reviews/Ratings.jsx';
import ReviewsList from '../client/components/Reviews/ReviewsList.jsx';
import ReviewsListEntry from '../client/components/Reviews/ReviewsListEntry.jsx';

import fixtures from './fixtures.js';

describe('Reviews Component', () => {
  beforeEach(() => {
    jest.spyOn(Reviews.prototype, 'get').mockImplementation((options) => {
      return Promise.resolve({ data: 'fixtures.reviews' });
    });

    jest.spyOn(axios, 'get').mockImplementation((endpoint, options) => {
      switch (endpoint) {
      case '/getReviews':
        return Promise.resolve({ data: fixtures.reviews });
      default:
        const error = new Error(`ENDPOINT[${endpoint}] MUST BE MOCKED`);
        console.error({ error });
      }
    });

    jest.spyOn(axios, 'get').mockImplementation((endpoint, options) => {
      switch (endpoint) {
      case '/getRating':
        return Promise.resolve({ data: '4.56' });
      default:
        const error = new Error(`ENDPOINT[${endpoint}] MUST BE MOCKED`);
        console.error({ error });
      }
    });

  });

  test('Reviews Async check', () => {
    withHooks(() => {
      window.onload = () => {
        const reviews = shallow(<Reviews key={'59553'} productId={'59553'}/>);
        return Promise.resolve().then(() => {
          expect(reviews.find(ReviewsList).props().list).toBe(fixtures.reviews);
        });
      };
    });
  });

  test('checks reviews component', () => {
    const wrapper = shallow( < Reviews / > );
    expect(wrapper).toHaveLength(1);
  });


  test('checks reviews api get call', () => {
    const spy = jest.spyOn(Reviews.prototype, 'get');
    const wrapper = mount( < Reviews productId={'59553'}/ > );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });

  test('checks reviews componentDidMount', () => {
    const spy = jest.spyOn(Reviews.prototype, 'get');
    const wrapper = mount( < Reviews productId={'59553'} / > );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });
});



describe('ReviewsList Component', () => {
  test('checks if ReviewsList renders', () => {
    const wrapper = shallow( < ReviewsList list = {fixtures.reviews}/>);
    expect(wrapper).toHaveLength(1);
  });

  test('checks if getMoreReviews function adjusts state', () => {
    const wrapper = shallow( < ReviewsList list = {fixtures.reviews}/>);
    wrapper.instance().getMoreReviews();
    expect(wrapper.state('showing')).toEqual(4);
  });
});


describe('ReviewsListEntry Component', () => {
  test('checks if reviewsListEntry component renders', () => {
    const wrapper = mount( < ReviewsListEntry review = {fixtures.reviews[0]}/>);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Ratings Component', () => {
  test('checks if Ratings component renders', () => {
    const wrapper = shallow( < Ratings handleChange = {() => {}} meta = {fixtures.meta}/>);
    expect(wrapper).toHaveLength(1);
  });
});
