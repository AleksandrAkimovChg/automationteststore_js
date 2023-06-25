/// <reference types="cypress" />

describe('first Test', () => {
  it('visit to project', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('a.menu_home').realHover().click();
  });

});
