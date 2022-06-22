/* eslint-disable no-unused-expressions */
/* global describe, it, cy, beforeEach, expect */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { SinonStub } from 'cypress/types/sinon';
import PageController from '../../src/components/PageController';

describe('BookTable', () => {
  let stubbedUpdateSearch: SinonStub;
  const totalCount = 30;
  const itemsPerPage = 5;
  beforeEach(() => {
    stubbedUpdateSearch = cy.stub();
    cy.mount(
      <PageController
        limit={itemsPerPage}
        page={1}
        totalCount={totalCount}
        updateSearch={stubbedUpdateSearch}
      />,
    );
  });
  it('renders', () => {
    cy.get('[data-testid="pagination-controller"]');
  });
  it('contains the expected max page', () => {
    const expected = Math.ceil(totalCount / itemsPerPage).toString();
    cy.contains(expected);
  });
  it('starts in page one', () => {
    cy.get('.selected')
      .should('have.text', '1');
  });
  it('updates selected page when you click on a button', () => {
    cy.get('.selected')
      .should('have.text', '1');

    cy.contains('2')
      .click()
      .then(() => {
        cy.get('.selected')
          .should('have.text', '2');
      });
  });
  it('calls updateSearch when you click on a button', () => {
    cy.contains('2')
      .click()
      .then(() => {
        expect(stubbedUpdateSearch).to.be.called;
      });
  });
  it('contains a items per page input', () => {
    cy.get('[data-testid="pagination-limit-input"]');
  });
  it('calls updateSearch when you type on the items per page input', () => {
    cy.get('[data-testid="pagination-limit-input"]')
      .type('7')
      .then(() => {
        expect(stubbedUpdateSearch).to.be.called;
      });
  });
  it('shows errorMsg if items per page is less than 5', () => {
    const expectedMessage = 'Quantidade mínima permitida é 5.';
    cy.get('[data-testid="pagination-limit-input"]')
      .type('4')
      .then(() => {
        cy.get('[data-testid="pagination-errorMsg"]')
          .should('have.text', expectedMessage);
      });
  });
  it('shows errorMsg if items per page is bigger than 50', () => {
    const expectedMessage = 'Quantidade máxima permitida é 50.';
    cy.get('[data-testid="pagination-limit-input"]')
      .type('60')
      .then(() => {
        cy.get('[data-testid="pagination-errorMsg"]')
          .should('have.text', expectedMessage);
      });
  });
  it('disables previous button if first page is selected', () => {
    cy.get('.disabled')
      .should('have.text', 'Anterior');
  });
  it('disables next button if last page is selected', () => {
    const expected = Math.ceil(totalCount / itemsPerPage).toString();
    cy.contains(expected)
      .click()
      .then(() => {
        cy.get('.disabled')
          .should('have.text', 'Próximo');
      });
  });
});
