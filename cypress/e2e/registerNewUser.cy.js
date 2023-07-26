import CategorymenuPage from "../pageObjects/CategorymenuPage";
import {accountRegSuccessPageUrl, accountRegSuccessPageTitle} from "../fixtures/accountRegSuccessPage.json";


describe('Register New User', () => {

    it('AT_004_001 CategorymenuPage > Verify new user can get registered', () => {
       CategorymenuPage
           .getAccountLoginPage()
           .checkoutToRegisterAccount()
           .fillInAccountForm()
           .selectAccountFormMenu()
           .checkAccountFormCheckboxes()
           .clickSubmitButton()
           .assertNavigation(accountRegSuccessPageUrl, accountRegSuccessPageTitle);
    });
});

