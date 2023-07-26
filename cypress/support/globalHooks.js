const BASE_URL = Cypress.env('baseUrl');

beforeEach(() => {
    cy.visit(BASE_URL);
});
