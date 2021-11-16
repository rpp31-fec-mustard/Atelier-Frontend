import React from 'react';
import {unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
//for React Testing Library
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


import App from '../client/components/app.jsx';
import ProductOverview from '../client/components/ProductOverview/ProductOverview.jsx';
import ImageGallery from '../client/components/ProductOverview/ImageGallery.jsx';
import StyleSelector from '../client/components/ProductOverview/StyleSelector.jsx';
import ThumbnailsBar from '../client/components/ProductOverview/ImageGallerySubs/ThumbnailsBar.jsx';
import Thumbnail from '../client/components/ProductOverview/ImageGallerySubs/Thumbnail.jsx';
import SelectSizeMenu from '../client/components/ProductOverview/StyleCartSubs/SelectSizeMenu.jsx';

// fixtures
import fixtures from './fixtures.js';





xdescribe('My Tests', () => {
  //does not work due to conditional
  xtest ('renders Product Overview component', () => {
    render(<ProductOverview />);
    screen.debug();
  });
});

describe('Product Overview', () => {
  test ('renders Product Overview component', () => {
    render(<ProductOverview
      product={fixtures.product}
      // productId={fixtures.product.id}
    />);
    screen.debug();
    const result = screen.getByText('Camo Onesie');
    expect(result).toBeInTheDocument;
  });

  test ('renders correct item name', () => {
    const productName = fixtures.product.name;
    render(<ProductOverview
      product={fixtures.product} productId={fixtures.product.id}/>);
    const result = screen.getByText(productName);
    expect(result).toBeInTheDocument;
  });

  xtest ('renders correct description', () => {
    // const descriptionName

  });

  test ('renders correct highlights', () => {
    const highlight = `${fixtures.product.features[0].value} ${fixtures.product.features[0].feature}`;
    render(<ProductOverview
      product={fixtures.product} productId={fixtures.product.id}/>);
    const result = screen.getByText(highlight);
    expect(result).toBeInTheDocument;
  });
});




describe('Style Selector', () => {
  test ('renders Style Selector component', () => {
    const productName = 'The Product';
    render(<StyleSelector
      styles={fixtures.styles.results}
      currentStyleIndex={0}
      productName={productName}/>);
    expect(screen.getByText(/STYLE/)).toBeInTheDocument();
    // expect(screen.queryByText('/STYLE/')).not.toBeInTheDocument();
  });

  test ('renders default style name', () => {
    //search expression from fixture
    const productName = 'The Product';
    const regex = new RegExp(fixtures.styles.results[0].name);

    render(<StyleSelector
      styles={fixtures.styles.results}
      currentStyleIndex={0}
      productName={productName}/>);

    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  test ('renders img with alt text', () => {
    const productName = 'The Product';
    //search expression from fixture
    //needed for regex search term that utilizes variable
    const regex = new RegExp(fixtures.styles.results[0].name);
    // console.log(regex);
    render(<StyleSelector
      styles={fixtures.styles.results}
      currentStyleIndex={0}
      productName={productName}/>);
    expect(screen.getByAltText(regex)).toBeInTheDocument();
  });

  test ('renders correct number of thumbnails', () => {
    const productName = 'The Product';
    //search expression from fixture
    const count = fixtures.styles.results.length;

    render(<StyleSelector
      styles={fixtures.styles.results}
      currentStyleIndex={0}
      productName={productName}/>);
    expect(screen.getAllByRole('img')).toHaveLength(count);
  });
});




describe('Add to Cart', () => {
  describe('Select Size Menu', () => {

    test('renders Size Menu component', () => {
      render(<SelectSizeMenu skus={fixtures.styles.results[0].skus}/>);
      expect(screen.getByRole('option', {name: /Select Size/})).toBeInTheDocument();
    });
    test('renders size options', () => {
      render(<SelectSizeMenu skus={fixtures.styles.results[0].skus}/>);
      screen.debug();
      expect(screen.getByRole('option', {name: 'x-small'})).toBeInTheDocument();
      expect(screen.getByRole('option', {name: 'small'})).toBeInTheDocument();
      expect(screen.getByRole('option', {name: 'medium'})).toBeInTheDocument();
      expect(screen.getByRole('option', {name: 'large'})).toBeInTheDocument();
      expect(screen.getByRole('option', {name: 'x-large'})).toBeInTheDocument();
    });
    test('renders OUT OF STOCK', () => {
      render(<SelectSizeMenu skus={fixtures.styles.results[2].skus}/>);
      expect(screen.getByRole('option', {name: 'OUT OF STOCK'})).toBeInTheDocument();

    });
    xtest('renders something', () => {

    });
    xtest('renders something', () => {

    });
  });

  xdescribe('Select Quantity Menu', () => {

    xtest('renders Quantity Menu component', () => {
      console.log('path test', path);
      render(<Comp props={path}/>);
      screen.debug();
      expect(screen.getByRole( )).toBeInTheDocument();

    });
    xtest('renders default', () => {

    });
    xtest('renders correct number', () => {

    });
    xtest('renders out', () => {

    });
    xtest('renders something', () => {

    });
  });




});


// xdescribe('Test Group', () => {
//   xtest('renders component', () => {

//   });
//   xtest('renders default', () => {

//   });
//   xtest('renders correct number', () => {

//   });
//   xtest('renders something', () => {

//   });
//   xtest('renders something', () => {

//   });
// });











/*/
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

xdescribe('Render Tests', () => {
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
//*/







/*/
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
//*/

/*/
xdescribe('Image Gallery Module', () => {
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

//*/