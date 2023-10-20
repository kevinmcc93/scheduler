import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Schedule component', () => {
  render(<App />);
  const scheduleElement = screen.getByText('Schedule');
  expect(scheduleElement).toBeInTheDocument();
});

test('renders Load component', () => {
  render(<App />);
  const loadElement = screen.getByText('Load');
  expect(loadElement).toBeInTheDocument();
});
