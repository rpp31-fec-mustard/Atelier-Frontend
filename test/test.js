import React from 'react';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

// import Regenerator to allow for async functions
import "regenerator-runtime/runtime";

// the component to test
import App from '../client/components/app.jsx';


const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello world'}));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('loads and displays 4 module components', async () => {
  // Arrange
  render(<App />);
  // Act

  // Assert
})

test('handles server error', async () => {
  server.use(
    rest.get('/', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  )
})

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});