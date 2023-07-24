// const USERNAME = Cypress.env('userName');
// const PASSWORD = Cypress.env('password');
const BASE_URL = Cypress.env('baseUrl');

beforeEach(() => {
    cy.visit(BASE_URL);
    // cy.get('#customernav a').click();
    // cy.get('input#loginFrm_loginname').type(USERNAME);
    // cy.get('input#loginFrm_password').type(PASSWORD);
    // cy.get('button[title="Login"]').click();
});
