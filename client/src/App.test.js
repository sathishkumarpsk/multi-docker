import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Commented out - As per Section 10-Cleaning up test - Without it app crashes since there is no express server running by this time and App -> Fib -> Requires express

  /* const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
