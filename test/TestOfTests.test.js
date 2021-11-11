import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { withHooks } from 'jest-react-hooks-shallow';
// import sinon from 'sinon';

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

describe('Tests of Render Tests', () => {

  describe('shallow test testing', () => {

    describe('PO to ImageGallery', () => {

      it('renders one <ImageGallery /> component shallow', () => {
        const wrapper = shallow(<ProductOverview />);
        expect(wrapper.contains(ImageGallery)).toEqual(true);
      });

      it('renders one <ImageGallery /> component shallow', () => {
        const wrapper = shallow(<ProductOverview />);
        console.log(wrapper.debug({ ignoreProps: true }));
        expect(wrapper.find(ImageGallery)).toHaveLength(1);
      });
    });


    describe('ImageGallery to ThumbnailsBar', () => {

      it('renders one <ThumbnailsBar /> component shallow', () => {
        const wrapper = shallow(<ImageGallery />);
        expect(wrapper.contains(ThumbnailsBar)).toEqual(true);
      });

      it('renders one <ThumbnailsBar /> component shallow', () => {
        const wrapper = shallow(<ImageGallery />);
        console.log(wrapper.debug({ ignoreProps: true }));
        expect(wrapper.find(ThumbnailsBar)).toHaveLength(1);
      });
    });



    describe('ThumbnailsBar to Thumbnail', () => {

      test('renders five <Thumbnail /> components shallow', () => {
        const wrapper = shallow(<ThumbnailsBar />);
        expect(wrapper.contains(Thumbnail)).toEqual(true);
      });
      //works
      test('renders five <Thumbnail /> components shallow', () => {
        const wrapper = shallow(<ThumbnailsBar />);
        console.log(wrapper.debug({ ignoreProps: true }));
        expect(wrapper.find(Thumbnail)).toHaveLength(5);
      });
    });
  });





  describe('mount test testing', () => {
    describe('PO to ImageGallery', () => {
    //works
      it('renders one <ImageGallery /> component mount', () => {
        const wrapper = mount(<ProductOverview />);
        console.log('2', wrapper.debug({ ignoreProps: true }));
        expect(wrapper.contains(ImageGallery)).toEqual(true);
      });
      it('renders one <ImageGallery /> component mount', () => {
        const wrapper = mount(<ProductOverview />);
        expect(wrapper.find(ImageGallery)).toHaveLength(1);
      });
    });

    describe('ImageGallery to ThumbnailsBar', () => {

      it('renders one <ThumbnailsBar /> component mount', () => {
        const wrapper = mount (<ImageGallery />);
        wrapper.update();
        console.log('1', wrapper.debug({ ignoreProps: true }));
        expect(wrapper.contains(ThumbnailsBar)).toEqual(true);
      });

      it('renders one <ThumbnailsBar /> component mount', () => {
        const wrapper = mount(<ImageGallery />);
        expect(wrapper.find(ThumbnailsBar)).toHaveLength(1);
      });
    });


    describe('ThumbnailsBar to Thumbnail', () => {
    //works
      test('renders five <Thumbnail /> components mount', () => {
        const wrapper = mount(<ThumbnailsBar />);
        expect(wrapper.contains(Thumbnail)).toEqual(true);
      });
      //works
      test('renders five <Thumbnail /> components mount', () => {
        const wrapper = mount(<ThumbnailsBar />);
        expect(wrapper.find(Thumbnail)).toHaveLength(5);
      });
    });
  });









  describe('render test testing', () => {
    describe('PO to ImageGallery', () => {
      test('renders one <ImageGallery /> component render', () => {
        act(() => {
          render(<ProductOverview />, container);
        });
        const component = document.getElementsByClassName('image_gallery_po');
        expect(component.length).toEqual(1);
      });

      test('renders one <ImageGallery /> component render', () => {
        act(() => {
          render(<ProductOverview />, container);
        });
        const component = document.getElementsByClassName('image_gallery_po');
        expect(component).toHaveLength(1);
      });
    });




    describe('ImageGallery to ThumbnailsBar', () => {

      //works
      it('renders one <ThumbnailsBar /> component mount', () => {
        act(() => {
          render(<ThumbnailsBar />, container);
        });
        const component = document.getElementsByClassName('image_gallery_po');
        expect(component.length).toEqual(1);
      });

      it('renders one <ThumbnailsBar /> component mount', () => {
        act(() => {
          render(<ThumbnailsBar />, container);
        });
        const component = document.getElementsByClassName('image_gallery_po');
        expect(component).toHaveLength(1);
      });
    });


    describe('ThumbnailsBar to Thumbnail', () => {
      it('renders five <Thumbnail /> components render', () => {
        act(() => {
          render(<ThumbnailsBar />, container);
        });
        const component = document.getElementsByClassName('thumbnail_po');
        expect(component.length).toEqual(5);
      });
      //works
      it('renders five <Thumbnail /> components render', () => {
        act(() => {
          render(<ThumbnailsBar />, container);
        });
        const component = document.getElementsByClassName('thumbnail_po');
        expect(component).toHaveLength(5);
      });
    });
  });
});






