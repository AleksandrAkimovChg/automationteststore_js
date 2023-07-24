/// <reference types="cypress" />
class BasePage {

    assertNavigation(url, title) {
        cy.url().should('equal', url);
        cy.title().should('equal', title);
        return this;
    };

    static clickOnElement(element) {
        cy.get(element).click();
        return this;
    };

    static typeTextInForm(form, text) {
        cy.get(form).type(text);
        return this;
    };

    static clickOnDropdownMenuItem(menu, item) {
        cy.get(menu).realHover();
        cy.get(item).realHover().click();
        return this;
    };

    static clickOnSubmenuItem(menu, item, subItem) {
        cy.get(menu).realHover();
        cy.get(item).realHover();
        cy.get(subItem).realHover().click();
        return this;
    };

    static selectDropdownMenuItem(menu, value) {
        cy.get(menu).select(value)
        return this;
    };

    static checkRadioBtn(value) {
        cy.get('[type="radio"]').check(value);
        return this;
    };

    static checkCheckbox(value) {
        cy.get('[type="checkbox"]').check(value);
        return this;
    };
}
export default BasePage;

