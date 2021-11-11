import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';

// import App from '../client/components/app.jsx';
import ProductOverview from '../client/components/ProductOverview/ProductOverview.jsx';
import ImageGallery from '../client/components/ProductOverview/ImageGallery.jsx';
import ThumbnailsBar from '../client/components/ProductOverview/ImageGallerySubs/ThumbnailsBar.jsx';
import Thumbnail from '../client/components/ProductOverview/ImageGallerySubs/Thumbnail.jsx';
import StyleSelector from '../client/components/ProductOverview/StyleSelector.jsx';
import StyleThumbnail from '../client/components/ProductOverview/StyleCartSubs/StyleThumbnail.jsx';

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
  xtest('Four module_containers should be rendering', () => {
    act(() => {
      render(<App />, container);
    });
    const modules = document.getElementsByClassName('module_container');
    // console.log('modules count render test', modules)
    // window.onLoad = ()=> {
    expect(modules.length).toBe(4);
    // };
  });

  test('Product Overview should render', async () => {
    // act(() => {
      render(<ProductOverview />, container);

    // });

    const component = document.getElementsByClassName('product_overview_main');
    await expect(component.length).toBe(1);
    // };
  });
});









xdescribe('<ProductOverview /> full rendering', () => {
  it('renders one <ImageGallery /> component', () => {
    act(() => {
      render(<App />, container);
    });

    const wrapper = mount(<ProductOverview />);
    console.log('wrapper', wrapper);
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



describe('Image Gallery Module', () => {
  xit('renders all modules', () => {
  });
  it('renders Image Gallery', () => {
    act(() => {
      render(<ImageGallery />, container);
    });
    //journal entry
    const component = document.getElementsByClassName('image_gallery_po');
    expect(component.length).toBe(1);
  });

  it('renders left arrow', ()=> {
    act(() => {
      render(<ArrowLeft />, container);
    });
    const component = document.getElementsByClassName('arrow_left_po');
    expect(component.length).toBe(1);
  });

  it('renders right arrow', ()=> {
    act(() => {
      render(<ArrowRight />, container);
    });
    const component = document.getElementsByClassName('arrow_right_po');
    expect(component.length).toBe(1);
  });

  xit('style thumbnails should render', () => {
    // let count =
    const wrapper = shallow(<StyleSelector />);
    expect(wrapper.find(StyleThumbnail)).toHave(5);
  });

  // test('renders five <Thumbnail /> components shallow', () => {
  //   const wrapper = shallow(<ThumbnailsBar />);
  //   expect(wrapper.find(Thumbnail)).toHaveLength(5);
  // });

  xit('interacts correctly', () => {
  });

  xit('interacts correctly', () => {
  });

  xit('left arrow changes to previous image', () => {
  });

  xit('right arrow changed to next image', () => {
  });
});

describe('Style Module', () => {
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