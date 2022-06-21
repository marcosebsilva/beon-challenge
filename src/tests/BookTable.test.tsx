/* global describe, it, expect, beforeEach */
import { screen } from '@testing-library/react';
import React from 'react';
import BookTable from '../components/BookTable';
import { BooksProvider } from '../context/BooksContext';
import { SearchProvider } from '../context/SearchContext';
import setup from './helpers/setup';

describe('BookTable', () => {
  beforeEach(() => {
    setup(
      <SearchProvider>
        <BooksProvider>
          <BookTable />
        </BooksProvider>
      </SearchProvider>,
    );
  });
  it('it renders', () => {
    const table = screen.queryByTestId('table');
    expect(table).toBeTruthy();
  });
  it('contains 5 heads', () => {
    const tableHead = screen.queryAllByTestId('table-head');
    expect(tableHead).toHaveLength(5);
  });
});

export {};
