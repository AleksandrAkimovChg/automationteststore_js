import BasePage from "./BasePage";
import AccountRegSuccessPage from "./AccountRegSuccessPage";
import {faker} from "@faker-js/faker";
import accountForm from "../fixtures/accountForm.json";

class CreateAccountPage extends BasePage{

    accountForm = 'forms.AccountFrm.elements';
    regionMenu = '#AccountFrm_zone_id';
    regionValue = '69';
    countryMenu = '#AccountFrm_country_id';
    countryValue = '3';
    subscribeYesBtn = '1';
    subscribeNoBtn = '0';
    policyCheckbox = '1';
    submitButton = 'button[title="Continue"]';

    fillInAccountForm() {
     cy.document()
         .its(this.accountForm)
         .then((elements) => {
             elements[accountForm.firstName].value = faker.person.firstName()
             elements[accountForm.lastName].value = faker.person.lastName()
             elements[accountForm.email].value = faker.internet.email()
             elements[accountForm.telephone].value = faker.phone.number()
             elements[accountForm.fax].value = faker.phone.number()
             elements[accountForm.company].value = faker.company.name()
             elements[accountForm.address1].value = faker.location.streetAddress()
             elements[accountForm.address2].value = faker.location.secondaryAddress()
             elements[accountForm.city].value = faker.location.city()
             elements[accountForm.zipCode].value = faker.location.zipCode()
             elements[accountForm.loginName].value = faker.internet.userName()
             elements[accountForm.password].value = faker.internet.password()
             elements[accountForm.passwordConfirm].value = elements[accountForm.password].value
         });
     return this;
    };

    selectAccountFormMenu() {
        CreateAccountPage
            .selectDropdownMenuItem(this.countryMenu, this.countryValue)
            .selectDropdownMenuItem(this.regionMenu, this.regionValue)
        return this;
    };

    checkAccountFormCheckboxes() {
        CreateAccountPage
            .checkRadioBtn(this.subscribeYesBtn)
            .checkCheckbox(this.policyCheckbox);
        return this;
    };

    clickSubmitButton() {
        CreateAccountPage
            .clickOnElement(this.submitButton);
        return new AccountRegSuccessPage();
    };
}
export default CreateAccountPage;
