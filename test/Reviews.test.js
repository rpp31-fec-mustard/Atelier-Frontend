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
import AddReviewModal from '../client/components/Reviews/AddReviewModal/AddReviewModal.jsx';

import fixtures from './fixtures.js';

describe('Reviews Component', () => {
  beforeEach(() => {
    const reviews = shallow(<Reviews key={'59553'} productId={'59553'}/>);
    jest.spyOn(Reviews.prototype, 'get').mockImplementation((options) => {
      return Promise.resolve(
        reviews.setState({
          allReviews: fixtures.reviews,
          displayedReviews: fixtures.reviews,
          reviewMeta: fixtures.meta,
        })
      );
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

  test('checks if state is passed to Ratings Component', (done) => {
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.instance().get().then((result) => {
      expect(result.find(Ratings).props().meta).toBe(fixtures.meta);
      done();
    }).catch(err => ( console.log(err) ) );
  });

  test('checks if state is passed to ReviewList Component', (done) => {
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.instance().get().then((result) => {
      expect(result.find(ReviewsList).props().list).toEqual(fixtures.reviews);
      done();
    }).catch(err => ( console.log(err) ) );
  });

  test('checks reviews component', () => {
    const wrapper = shallow( < Reviews productId={'59553'}/ > );
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.reviewsTitle')).toHaveLength(1);
    expect(wrapper.find(Ratings)).toHaveLength(1);
    expect(wrapper.find(ReviewsList)).toHaveLength(1);
  });

  test('checks reviews api get call', () => {
    const spy = jest.spyOn(Reviews.prototype, 'get');
    let id = {id: 59553};
    const wrapper = mount( < Reviews productId={'59553'} productInfo={id}/ > );
    expect(spy).toHaveBeenCalled();
  });

  test('checks reviews componentDidMount', () => {
    const spy = jest.spyOn(Reviews.prototype, 'componentDidMount');
    let id = {id: 59553};
    const wrapper = mount( < Reviews productId={'59553'} productInfo={id} /> );
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
    wrapper.instance().filterReviews(fixtures.reviews, fixtures.meta, ['4']);
    expect(wrapper.state('displayedReviews').length).toEqual(1);
  });

  test('checks handleStarChange function', () => {
    let clicked = { target: {innerText: '4'} };
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.setState({
      allReviews: fixtures.reviews,
      starFilter: []
    });
    wrapper.instance().handleStarChange(clicked);
    expect(wrapper.state('displayedReviews').length).toEqual(1);
  });

  test('checks handleStarChange function', () => {
    let clicked = { target: {innerText: '4'} };
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.setState({
      allReviews: fixtures.reviews,
      starFilter: ['4']
    });
    wrapper.instance().handleStarChange(clicked);
    expect(wrapper.state('displayedReviews').length).toEqual(4);
  });

  test('checks handleStarChange function', () => {
    let clicked = { target: {innerText: '3'} };
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.setState({
      allReviews: fixtures.reviews,
      starFilter: []
    });
    wrapper.instance().handleStarChange(clicked);
    expect(wrapper.state('displayedReviews').length).toEqual(0);
  });

  test('checks handleStarChange function', () => {
    let clicked = { target: {innerText: '5'} };
    const wrapper = shallow( < Reviews productId={'59553'}/>);
    wrapper.setState({
      allReviews: fixtures.reviews,
      starFilter: ['4']
    });
    wrapper.instance().handleStarChange(clicked);
    expect(wrapper.state('displayedReviews').length).toEqual(4);
  });
});


describe('ReviewsList Component', () => {
  test('checks if ReviewsList renders', () => {
    let id = {id: 59553};
    const wrapper = shallow( < ReviewsList list = {fixtures.reviews} productInfo={id}/>);
    expect(wrapper).toHaveLength(1);
  });

  test('checks if only two reviews are displayed', () => {
    let id = {id: 59553};
    const wrapper = mount( < ReviewsList list={fixtures.reviews} productInfo={id} meta={fixtures.meta} />);
    expect(wrapper.find('.reviewEntry').length).toEqual(2);
  });

  test('checks if show more reviews button adds two reviews', () => {
    let id = {id: 59553};
    const wrapper = mount( < ReviewsList list={fixtures.reviews} productInfo={id} meta={fixtures.meta} />);
    wrapper.find('.show').simulate('click');
    expect(wrapper.find('.reviewEntry').length).toEqual(4);
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
    let meaning = wrapper.find('.first').text();
    expect(meaning).toEqual('too small ');
  });

  test('checks if rating is converted to percent and added to style in indicator element', () => {
    const wrapper = mount( < CharacteristicBreakdown key='1' char='Size' rating='3' />);
    expect(wrapper.find('i').props().style).toEqual({left: '53%'});
  });
});


describe('AddReviewsModal Component', () => {
  test('checks if characteristicBreakdown component renders', () => {
    const wrapper = mount( < AddReviewModal meta={fixtures.meta} />);
    expect(wrapper).toHaveLength(1);
  });
});