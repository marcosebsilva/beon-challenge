/* global describe, it, expect, beforeEach */
import { screen } from '@testing-library/react';
import React from 'react';
import HeaderComponent from '../components/Header';
import setup from './helpers/setup';

describe('Header', () => {
  beforeEach(() => {
    setup(<HeaderComponent />);
  });
  it('it renders', () => {
    const header = screen.queryByTestId('header');
    expect(header).toBeTruthy();
  });
  it('has a input to determine query', () => {
    const queryInput = screen.queryByTestId('input-query');
    expect(queryInput).toBeTruthy();
  });
  it('the query input has the expected placeholder', () => {
    const queryInput = screen.getByTestId('input-query');
    const actual = queryInput.getAttribute('placeholder');
    const expected = 'Busque livros pelo autor, título ou idioma';

    expect(actual).toEqual(expected);
  });
  it('has a button to search with the expected title', () => {
    const queryButton = screen.queryByTestId('query-button');
    expect(queryButton).toBeTruthy();
    expect(queryButton).toHaveTextContent('Buscar');
  });
  it('has option to determine minimum year range', () => {
    const minYear = screen.queryByTestId('min-year');
    expect(minYear).toBeTruthy();
  });
  it('has option to determine max year range', () => {
    const maxYear = screen.queryByTestId('max-year');
    expect(maxYear).toBeTruthy();
  });
  it('has a element to show total result count', () => {
    const resultCount = screen.queryByTestId('result-count');
    expect(resultCount).toBeTruthy();
  });
});

export {};
