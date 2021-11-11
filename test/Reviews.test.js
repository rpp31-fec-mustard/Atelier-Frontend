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
import FilterDisplay from '../client/components/Reviews/FilterDisplay.jsx';
import CharacteristicBreakdown from '../client/components/Reviews/CharacteristicBreakdown.jsx';

import fixtures from './fixtures.js';

describe('Reviews Component', () => {
  beforeEach(() => {
    jest.spyOn(Reviews.prototype, 'get').mockImplementation((options) => {
      return Promise.resolve({ data: fixtures.reviews });
    });

    jest.spyOn(axios, 'get').mockImplementation((endpoint, options) => {
      switch (endpoint) {
      case '/getReviews':
        return Promise.resolve({ data: fixtures.reviews});
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

  test('checks get', () => {
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.instance().get().then((result) => {
      expect(result.data.length).toBe(4);
    }).catch(err => ( console.log(err) ) );
  });


  test('checks reviews component', () => {
    const wrapper = shallow( < Reviews productId={'59553'}/ > );
    expect(wrapper).toHaveLength(1);
  });

  test('checks reviews api get call', () => {
    const spy = jest.spyOn(Reviews.prototype, 'get');
    const wrapper = mount( < Reviews productId={'59553'}/ > );
    expect(spy).toHaveBeenCalled();
  });

  test('checks reviews componentDidMount', () => {
    const spy = jest.spyOn(Reviews.prototype, 'componentDidMount');
    const wrapper = mount( < Reviews productId={'59553'} / > );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });

  test('checks sortListOnChange function', () => {
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.instance().sortListOnChange({target: {value: 'newest'}}, () => {});
    expect(wrapper.state('sorted')).toEqual('newest');
  });

  test('checks filterReviews function', () => {
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.instance().filterReviews(fixtures.reviews, ['4']);
    expect(wrapper.state('displayedReviews').length).toEqual(1);
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

  test('checks getOverallRating function', () => {
    const wrapper = mount( < Ratings productId={'59553'} handleChange = {() => {}} meta = {fixtures.meta}/>);
    wrapper.instance().getOverallRating(3.78);
    expect(wrapper.state('overallRating')).toEqual(3.8);
  });

  test('checks getPercentRecommend function', () => {
    const wrapper = shallow( < Ratings productId={'59553'} handleChange = {() => {}} meta = {fixtures.meta}/>);
    expect(wrapper.instance().getPercentRecommend()).toEqual('73% of reviews recommend this product');
  });

  test('checks orderRatings function', () => {
    const wrapper = mount( < Ratings productId={'59553'} handleChange = {() => {}} meta = {fixtures.meta}/>);
    wrapper.instance().orderRatings();
    expect(wrapper.state('starAverages')).toEqual([ '10', '1', 0, 0, 0 ]);
  });

  test('checks orderCharRatings function', () => {
    let expectedChar = Object.keys(fixtures.meta.characteristics);
    const wrapper = mount( < Ratings productId={'59553'} handleChange = {() => {}} meta = {fixtures.meta}/>);
    wrapper.instance().orderCharRatings();
    expect(wrapper.state('characteristics').length).toEqual(expectedChar.length);
  });
});

describe('FilterDisplay Component', () => {
  test('checks if FilterDisplay component renders', () => {
    const wrapper = shallow( < FilterDisplay remove = {() => {}} filters = {[5, 4, 3, 2, 1]}/>);
    expect(wrapper).toHaveLength(1);
  });
});

describe('CharactertisticBreakdown Component', () => {
  test('checks if characteristicBreakdown component renders', () => {
    const wrapper = shallow( < CharacteristicBreakdown key='1' char='Size' rating='3' />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.characteristicName').text()).toEqual(' Size ');
    let meanings = wrapper.find('.ratingMeaning').text();
    expect(meanings).toEqual('too small perfect too big ');
  });

  test('checks if rating is converted to percent and added to style in indicator element', () => {
    const wrapper = mount( < CharacteristicBreakdown key='1' char='Size' rating='3' />);
    expect(wrapper.find('i').props().style).toEqual({left: '60%'});
  });
});