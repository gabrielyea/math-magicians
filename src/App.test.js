import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Check if all components are rendered', () => {
  test('Renders Math Magicians logo', () => {
    render(<App />);
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  });
  test('Renders Home', () => {
    render(<App />);
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });
  test('Renders Quote', () => {
    render(<App />);
    expect(screen.getByText('Joke')).toBeInTheDocument();
  });
  test('Renders Calculator', () => {
    render(<App />);
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  });
});
