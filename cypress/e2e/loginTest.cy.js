/// <reference types="cypress" />
import HeaderPage from "../pageObjects/HeaderPage";
import {myAccountPageUrl, myAccountPageTitle} from "../fixtures/myAccountPage.json"

describe('Login Test', () => {
    //const headerPage = new HeaderPage();
    it('AT_001_001 Header > Verify Login from Login or Register link', () => {
        HeaderPage
            .loginFromLoginOrRegisterLink()
            .assertNavigation(myAccountPageUrl, myAccountPageTitle);
    });

    it('AT_001_002 Header > Verify Login from Account link', () => {
        HeaderPage
            .loginFromAccountLink()
            .assertNavigation(myAccountPageUrl, myAccountPageTitle);
    });

    it('AT_001_003 Header > Verify Login from Account link Dropdown Menu', () => {
        HeaderPage
            .loginFromAccountLinkDropdownMenu()
            .assertNavigation(myAccountPageUrl, myAccountPageTitle);
    });
});
