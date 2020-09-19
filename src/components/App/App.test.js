import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

test('renders the main header', () => {
  const { getByText } = render(<App />);
  const mainHeader = getByText(/Luca Leiva/i);

  expect(mainHeader).toBeInTheDocument();
});
