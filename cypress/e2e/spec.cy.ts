/* global describe, beforeEach, before, it, cy */
describe('Integration', () => {
  before(() => {
    cy.visit('localhost:3000');
  });
  beforeEach(() => {
    cy.get('[data-testid="min-year"]').clear();
    cy.get('[data-testid="max-year"]').clear();
    cy.get('[data-testid="input-query"]').clear();
    cy.get('[data-testid="query-button"]').click();
  });
  it('updates table when you type a minYear', () => {
    const HALF_A_SECOND = 500;
    cy.wait(HALF_A_SECOND);
    cy.get('[data-testid="result-count"]')
      .invoke('text')
      .then((previousText) => {
        cy.get('[data-testid="min-year"]')
          .type('1920')
          .then(() => {
            cy.get('[data-testid="result-count"]')
              .should('not.have.text', previousText);
          });
      });
  });
  it('updates table when you type a maxYear', () => {
    const HALF_A_SECOND = 500;
    cy.wait(HALF_A_SECOND);
    cy.get('[data-testid="result-count"]')
      .invoke('text')
      .then((previousText) => {
        cy.get('[data-testid="max-year"]')
          .type('1950')
          .then(() => {
            cy.get('[data-testid="result-count"]')
              .should('not.have.text', previousText);
          });
      });
  });
  it('updates table when you search for a query', () => {
    const HALF_A_SECOND = 500;
    cy.wait(HALF_A_SECOND);
    cy.get('[data-testid="result-count"]')
      .invoke('text')
      .then((previousText) => {
        cy.get('[data-testid="input-query"]')
          .type('english')
          .then(() => {
            cy.get('[data-testid="query-button"]')
              .click()
              .then(() => {
                cy.get('[data-testid="result-count"]')
                  .should('not.have.text', previousText);
              });
          });
      });
  });
  it('changes the page when you click on a pagination button', () => {
    cy.get('[data-testid="table-item-title"]')
      .first()
      .invoke('text')
      .then((previousText) => {
        cy.get('li').contains('2')
          .click()
          .then(() => {
            cy.get('[data-testid="table-item-title"]')
              .first()
              .should('not.have.text', previousText);
          });
      });
  });
  it('changes the table size when you type on the items per page input', () => {
    cy.get('[data-testid="table-item-title"]')
      .its('length')
      .then((previousLength) => {
        cy.get('[data-testid="pagination-limit-input"]')
          .type('7')
          .then(() => {
            cy.get('[data-testid="table-item-title"]')
              .should('not.have.length', previousLength);
          });
      });
  });
  it('shows a modal when you click on one of the toggleModal buttons and closes when you click outside of it', () => {
    cy.get('[data-testid="show-modal"]')
      .first()
      .click()
      .then(() => {
        cy.get('[data-testid="modal-title"]');
      });

    cy.get('body')
      .click(0, 0)
      .then(() => {
        cy.get('[data-testid="modal-title"]')
          .should('not.exist');
      });
  });
});

export {};
