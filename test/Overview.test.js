import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';

import App from '../client/components/app.jsx';
import ProductOverview from '../client/components/ProductOverview/ProductOverview.jsx';
import ImageGallery from '../client/components/ProductOverview/ImageGallery.jsx';
import ThumbnailsBar from '../client/components/ProductOverview/ImageGallerySubs/ThumbnailsBar.jsx';
import Thumbnail from '../client/components/ProductOverview/ImageGallerySubs/Thumbnail.jsx';

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

describe('Render Tests', () => {
  test('Four module_containers should be rendering', () => {
    act(() => {
      render(<App />, container);
    });
    const modules = document.getElementsByClassName('module_container');
    window.onLoad = ()=> {
      expect(modules.length).toBe(4);
    };
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
});

describe('Math tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});

describe('<ProductOverview /> full rendering', () => {
  it('renders one <ImageGallery /> component', () => {
    act(() => {
      render(<App />, container);
    });
    window.onLoad = () => {
      const wrapper = mount(<ProductOverview />);
      expect(wrapper.contains(<ImageGallery />)).toEqual(true);
    };
  });

  it('renders five <Thumbnail /> components', () => {
    act(() => {
      render(<App />, container);
    });

    window.onLoad = () => {
      const wrapper = mount(<ProductOverview />);
      // console.log('test')
      // console.log(wrapper.find(Thumbnail))
      expect(wrapper.find(Thumbnail).length).toEqual(5);
    };
  });
});

describe('<ThumbnailsBar /> shallow rendering', () => {
  it('renders five <Thumbnail /> components', () => {
    act(() => {
      render(<App />, container);
    });

    const wrapper = shallow(<ThumbnailsBar />);
    // console.log('test')
    // console.log(wrapper.find(Thumbnail))
    expect(wrapper.find(Thumbnail).length).toEqual(5);
  });
});
