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

beforeEach(async () => {
  // setup a DOM element as a render target
  container = await document.createElement('div');
  await document.body.appendChild(container);
});

afterEach(async () => {
  // cleanup on exiting
  await unmountComponentAtNode(container);
  await container.remove();
  container = null;
});

xdescribe('Render Tests', () => {
  test('Four module_containers should be rendering', () => {
    act(() => {
      render(<App />, container);
    });
    const modules = document.getElementsByClassName('module_container');
    // console.log('modules count render test', modules)
    // window.onLoad = ()=> {
    expect(modules.length).toBe(4);
    // };
  });

  test('Product Overview should render', () => {
    act(() => {
      render(<App />, container);

    });

    const component = document.getElementsByClassName('product_overview_main');
    expect(!!component).toBe(true);
    // };
  });
});









describe('<ProductOverview /> full rendering', () => {
  it('renders one <ImageGallery /> component', () => {
    act(() => {
      render(<App />, container);
    });

    const wrapper = mount(<ProductOverview />);
    console.log('wrapper', wrapper)
    expect(wrapper.contains(<ImageGallery />)).toEqual(true);

  });

  test('renders five <Thumbnail /> components', () => {
    act(() => {
      render(<App />, container);
    });

    const wrapper = mount(<ProductOverview />);
    // console.log('test')
    // console.log(wrapper.find(Thumbnail))
    expect(wrapper).toHaveLength(5);

  });
});



xdescribe('Image Gallery Module', () => {
  xit('renders all modules', () => {
  });
  test('Image Gallery should render', () => {
    act(() => {
      render(<App />, container);
    });
    //journal entry
    const component = document.getElementsByClassName('image_gallery_po');
    expect(!!component).toBe(true);
  });

  it('left arrow should render', ()=> {
    act(() => {
      render(<App />, container);
    });
    const component = document.getElementsByClassName('arrow_left_po');
    expect(!!component).toBe(true);
  });

  it('right arrow should render', ()=> {
    act(() => {
      render(<App />, container);
    });
    //journ
    const component = document.getElementsByClassName('arrow_right_po');
    expect(!!component).toBe(true);
  });

  xit('interacts correctly', () => {
  });

  xit('left arrow changes to previous image', () => {
  });

  xit('right arrow changed to next image', () => {
  });
});

xdescribe('Style Module', () => {
  xit('renders all modules', () => {
  });
  test('Style Selector should render', () => {
    act(() => {
      render(<App />, container);
    });
    //journal entry

    const component = document.getElementsByClassName('style_po');
    expect(!!component).toBe(true);

  });
  xit('interacts correctly', () => {
  });
});

xdescribe('Add to Cart Module', () => {
  xit('renders all modules', () => {
  });

  xit('interacts correctly', () => {
  });
});

xdescribe('Cart Interaction Module', () => {
  xit('renders all modules', () => {
  });
  xit('interacts correctly', () => {
  });
});