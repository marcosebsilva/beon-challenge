/* eslint-disable no-unused-expressions */
/* global describe, it, cy, beforeEach, expect */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { SinonStub } from 'cypress/types/sinon';
import Header from '../../src/components/Header';

describe('Header', () => {
  let stubbedUpdateSearch: SinonStub;
  beforeEach(() => {
    stubbedUpdateSearch = cy.stub();
    cy.mount(
      <Header
        totalCount={100}
        updateSearch={stubbedUpdateSearch}
      />,
    );
  });
  it('it renders', () => {
    cy.get('[data-testid="header"]');
  });
  it('has a input to determine query', () => {
    cy.get('[data-testid="input-query"]');
  });
  it('the query input has the expected placeholder', () => {
    cy.get('[data-testid="input-query"]')
      .should('have.attr', 'placeholder', 'Autor, título ou idioma');
  });
  it('has a button to search with the expected title', () => {
    cy.get('[data-testid="query-button"]')
      .should('have.text', 'Buscar');
  });
  it('calls updateSearch when we click on the search button', () => {
    cy.get('[data-testid="query-button"]')
      .click()
      .then(() => {
        expect(stubbedUpdateSearch).to.be.called;
      });
  });
  it('has option to determine minimum year range', () => {
    cy.get('[data-testid="min-year"]')
      .should('have.prop', 'tagName', 'INPUT');
  });
  it('has option to determine max year range', () => {
    cy.get('[data-testid="max-year"]')
      .should('have.prop', 'tagName', 'INPUT');
  });
  it('has a element to show total result count', () => {
    cy.get('[data-testid="result-count"]')
      .should('have.text', '100 resultados encontrados');
  });
  it('calls updateSearch when we type some year', () => {
    cy.get('[data-testid="min-year"]')
      .type('123')
      .then(() => {
        expect(stubbedUpdateSearch).to.be.called;
      });
    cy.get('[data-testid="max-year"]')
      .type('123')
      .then(() => {
        expect(stubbedUpdateSearch).to.be.called;
      });
  });
});
