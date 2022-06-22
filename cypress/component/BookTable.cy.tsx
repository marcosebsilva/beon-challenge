/* eslint-disable no-unused-expressions */
/* global describe, it, cy, beforeEach */
import React from 'react';
import BookTable from '../../src/components/BookTable';
import books from '../fixtures/books.json';

describe('BookTable', () => {
  beforeEach(() => {
    cy.mount(
      <BookTable
        books={books}
      />,
    );
  });
  it('renders', () => {
    cy.get('[data-testid="table"]');
  });
  it('has 5 table head elements', () => {
    cy.get('th')
      .should('have.length', 5);
  });
  it('renders the expected amount of books', () => {
    cy.get('[data-testid="table-item"]')
      .should('have.length', books.length);
  });
  it('renders title for each book', () => {
    cy.get('[data-testid="table-item-title"]')
      .should('have.length', books.length);
  });
  it('renders author for each book', () => {
    cy.get('[data-testid="table-item-author"]')
      .should('have.length', books.length);
  });
  it('renders year for each book', () => {
    cy.get('[data-testid="table-item-year"]')
      .should('have.length', books.length);
  });
  it('renders language for each book', () => {
    cy.get('[data-testid="table-item-language"]')
      .should('have.length', books.length);
  });
  it('renders button to toggle modal for each book', () => {
    cy.get('[data-testid="show-modal"]')
      .should('have.length', books.length);
  });
});
