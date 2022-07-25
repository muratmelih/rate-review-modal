import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { GetSavedData, SaveReviewAndRate } from './services/rate-review-service';
import { RateReviewType } from './components/rate-modal-component/types';

test('renders delivery speed rate component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Delivery Speed/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders food taste rate component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Food Taste /i);
  expect(linkElement).toBeInTheDocument();
});

test('renders service rate component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Service/i);
  expect(linkElement).toBeInTheDocument();
});


test('tests SaveReviewAndRate service method', () => {
  const saveData: RateReviewType = {
    rates: [],
    tags: [],
    review: 'test'
}
  expect(SaveReviewAndRate(saveData)).toEqual(true);
});


test('tests GetSavedData service method', () => {
   expect(GetSavedData()).not.toBeNull();
});