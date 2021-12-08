import React from 'react';
import {unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
//for React Testing Library
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


import App from '../client/components/app.jsx';
import ProductOverview from '../client/components/ProductOverview/ProductOverview.jsx';
import ImageGallery from '../client/components/ProductOverview/ImageGallery.jsx';
import StyleSelector from '../client/components/ProductOverview/StyleSelector.jsx';
import ThumbnailsBar from '../client/components/ProductOverview/ImageGallerySubs/ThumbnailsBar.jsx';
import Thumbnail from '../client/components/ProductOverview/ImageGallerySubs/Thumbnail.jsx';
import SelectSizeMenu from '../client/components/ProductOverview/StyleCartSubs/SelectSizeMenu.jsx';
import SelectQuantityMenu from '../client/components/ProductOverview/StyleCartSubs/SelectQuantityMenu.jsx';
import FullScreenModal from '../client/components/ProductOverview/ImageGallerySubs/FullScreenModal.jsx';
import ImageIconBar from '../client/components/ProductOverview/ImageGallerySubs/ImageIcon.jsx';
import ImageIcon from '../client/components/ProductOverview/ImageGallerySubs/ImageIcon.jsx';
import AddToCart from '../client/components/ProductOverview/AddToCart.jsx';

// fixtures
import fixtures from './fixtures.js';

/* eslint-disable func-style */



xdescribe('My Tests', () => {
  //does not work due to conditional
  xtest ('renders Product Overview component', () => {
    render(<ProductOverview />);
    screen.debug();
  });
});



// *** *** *** *** *** *** *** *** PRODUCT OVERVIEW *** *** *** *** *** *** *** *** //

describe('Product Overview', () => {
  test ('renders Product Overview component', () => {
    render(<ProductOverview
      product={fixtures.product}
      // productId={fixtures.product.id}
    />);
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




// *** *** *** *** *** *** *** *** IMAGE GALLERY *** *** *** *** *** *** *** *** //

describe('Image Gallery', () => {

  describe('Default View', () => {

    test('renders main image', () => {
      render(<ImageGallery
        currentStyle={fixtures.styles.results[0]}
        productId={fixtures.product.id}
        productName={fixtures.product.name}/>);
      // screen.debug();
      let result = screen.getByTestId('main-image');
      expect(result).toBeInTheDocument;
    });
    test('renders correct number of thumbnails', () => {
      render(<ImageGallery
        currentStyle={fixtures.styles.results[0]}
        productId={fixtures.product.id}
        productName={fixtures.product.name}/>);
      // screen.debug();
      let result = screen.getAllByRole('img', {name: /Thumbnail/});
      expect(result.length).toEqual(2);
    });
    test('renders expanded view on click', async () => {
      render(<ImageGallery
        currentStyle={fixtures.styles.results[0]}
        productId={fixtures.product.id}
        productName={fixtures.product.name}/>);
      expect(screen.queryByTestId('main-image-exp')).toBeNull();
      screen.debug();
      await userEvent.click(screen.getByTestId('click-exp-view'));
      screen.debug();
      expect(screen.getByTestId('main-image-exp')).toBeInTheDocument();
    });
  });



  describe('Expanded View', () => {

    test('renders main image', () => {
      render(<FullScreenModal
        isShowing={true}
        currentStyle={fixtures.styles.results[0]}
        photoIndex={0}
        productName={fixtures.product.name}/>);
      // screen.debug();
      expect(screen.getByRole('img', {name: /Camo Onesie/} )).toBeInTheDocument();
    });
    test('renders icons for thumbnail images', () => {
      render(<FullScreenModal
        isShowing={true}
        currentStyle={fixtures.styles.results[0]}
        photoIndex={0}
        photoIndexMax={1}
        productName={fixtures.product.name}/>);
      // screen.debug();
      let result = screen.getAllByTestId(/image_icon/);
      expect(result).toHaveLength(2); // this one!
    });
  });

  describe('Thumbnail bar', () => {

    xtest('renders thumbnail', () => {
      render(<ImageGallery
        currentStyle={fixtures.styles.results[0]}
        productId={fixtures.product.id}
        productName={fixtures.product.name}/>);
      // screen.debug();
      let result = screen.getByRole('img', {name: /Thumbnail of Camo Onesie/});
      expect(result).toBeInTheDocument;
    });
    test('renders correct number of thumbnails', () => {
      render(<ImageGallery
        currentStyle={fixtures.styles.results[0]}
        productId={fixtures.product.id}
        productName={fixtures.product.name}/>);
      screen.debug();
      let result = screen.getAllByRole('img', {name: /Thumbnail/});
      expect(result).toHaveLength(2);

    });
    // test('renders correct number of thumbnails', () => {
    //   render(<ImageGallery
    //     currentStyle={fixtures.styles.results[0]}
    //     productId={fixtures.product.id}
    //     productName={fixtures.product.name}/>);
    //   // screen.debug();
    //   let result = screen.getAllByRole('img', {name: /Camo Onesie/});
    //   expect(result).toHaveLength(2);
    // });
  });
});



// *** *** *** *** *** *** *** *** STYLE SELECTOR *** *** *** *** *** *** *** *** //


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
    // screen.debug();
    expect(screen.getAllByRole('img', {name: /The Product/})).toHaveLength(count);
  });
});


// *** *** *** *** *** *** *** *** *** ADD TO CART *** *** *** *** *** *** *** *** *** //





describe('Add to Cart', () => {

  describe('Select Size Menu', () => {

    test('renders Size Menu component', () => {
      render(<SelectSizeMenu skus={fixtures.styles.results[0].skus} size={'Select Size'}/>);
      expect(screen.getByText(/Select Size/)).toBeInTheDocument();
    });
    test('renders size options', async () => {
      render(<SelectSizeMenu skus={fixtures.styles.results[0].skus} size={'Select Size'}/>);
      await userEvent.click(screen.getByText(/Select Size/));
      screen.debug();
      expect(screen.getAllByText(/small/)).toHaveLength(2);
      // expect(screen.getByText('small')).toBeInTheDocument();
      expect(screen.getByText(/medium/)).toBeInTheDocument();
      expect(screen.getAllByText(/large/)).toHaveLength(3);
      // expect(screen.getByText('x-large')).toBeInTheDocument();
    });
    test('renders OUT OF STOCK', () => {
      render(<SelectSizeMenu skus={fixtures.styles.results[2].skus}/>);
      expect(screen.getByText(/OUT OF STOCK/)).toBeInTheDocument();

    });
    xtest('renders something', () => {

    });
    xtest('renders something', () => {

    });
  });

  describe('Select Quantity Menu', () => {

    test('renders Quantity Menu component', () => {
      // console.log('path test', path);
      render(<SelectQuantityMenu />);
      // screen.debug();
      expect(screen.getByText(/---/)).toBeInTheDocument();
      //redo this one with alt text
    });
    test('renders correct quantity', () => {
      // console.log('path test', path);
      render(<SelectQuantityMenu quantityMax={9}/>);
      // screen.debug();
      expect(screen.getByRole('option', {name: '9'} )).toBeInTheDocument();
      expect(screen.queryByRole('option', {name: '10'} )).toBeNull();
    });
    test('renders quanity up to 15', () => {
      // console.log('path test', path);
      render(<SelectQuantityMenu quantityMax={18}/>);
      // screen.debug();
      expect(screen.getByRole('option', {name: '15'} )).toBeInTheDocument();
      expect(screen.queryByRole('option', {name: '16'} )).toBeNull();
    });
    test('is disabled when quantity is 0', () => {
      render(<SelectQuantityMenu quantityMax={0}/>);
      // screen.debug();
      expect(screen.getByRole('combobox')).toBeDisabled;
    });
    test('is disabled after changing styles', () => {
      render(<SelectQuantityMenu quantityMax={0}/>);
      // screen.debug();
      expect(screen.getByRole('combobox')).toBeDisabled;

    });
    xtest('is ', () => {
      console.log('path test', path);
      render(<Comp props={path}/>);
      // screen.debug();
      expect(screen.getByRole( )).toBeInTheDocument();
    });
  });

  describe('Add to Bag Button', () => {

    test('renders component', () => {
      // console.log('path test', path);
      render(<AddToCart style={fixtures.styles.results[0]}/>);
      screen.debug();
      // expect(screen.getByRole( )).toBeInTheDocument();
    });
  });
});







//************************************************************************************ */



xdescribe('Test Group', () => {
  test('renders component', () => {
    // console.log('path test', path);
    // render(<Comp props={''}/>);
    // screen.debug();
    // expect(screen.getByRole( )).toBeInTheDocument();
  });
  test('renders default', () => {

  });
  xtest('renders correct number', () => {

  });
  xtest('renders something', () => {

  });
  xtest('renders something', () => {

  });
});


/*/
test commands

npm run test-log -- Overview.test.js --coverage --collectCoverageFrom='../client/components/ProductOverview/**'




//*/


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