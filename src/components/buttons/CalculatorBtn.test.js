import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalculatorBtn from './CalculatorBtn';

describe('Test Button component', () => {
  const props = {
    number: '1',
    name: 'btn-1',
    clickHandler: () => 'this is a func',
  };
  render(
    <CalculatorBtn number={props.number} name={props.name} clickHandler={props.clickHandler} />,
  );

  test('Button with number one should be on screen', () => {
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
