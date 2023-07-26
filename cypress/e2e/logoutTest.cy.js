/// <reference types="cypress" />
import HeaderPage from "../pageObjects/HeaderPage";
import CategorymenuPage from "../pageObjects/CategorymenuPage";
import {accountLogoutPageUrl, accountLogoutPageTitle} from "../fixtures/accountLogoutPage.json"

describe('Logout Test', () => {
    //const headerPage = new HeaderPage();
    it('AT_006_001 Categorymenu > Verify Logout', () => {
        HeaderPage.loginFromAccountLink();
        CategorymenuPage
            .logoutFromHomeDropdownMenu()
            .assertNavigation(accountLogoutPageUrl,accountLogoutPageTitle);
    });

    it('AT_007_001 MyAccount Page > Verify Logout', () => {
        HeaderPage
            .loginFromLoginOrRegisterLink()
            .logoffFromSideMenu()
            .assertNavigation(accountLogoutPageUrl, accountLogoutPageTitle);
    });
});
