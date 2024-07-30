import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BetComponent from './BetComponent';

test('renders BetComponent and handles input', () => {
  render(<BetComponent />);
  const inputElement = screen.getByPlaceholderText(/Enter bet amount/i);
  fireEvent.change(inputElement, { target: { value: '100' } });
  expect(inputElement.value).toBe('100');
});
