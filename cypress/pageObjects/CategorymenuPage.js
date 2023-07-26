import BasePage from "./BasePage";
import AccountLogoutPage from "./AccountLogoutPage";
import AccountLoginPage from "./AccountLoginPage";

class CategorymenuPage extends BasePage{

    static homeMenuLink = '#categorymenu .menu_home';
    static accountSubmenuLink = '#main_menu .menu_account';
    static loginSubmenuLink = '#main_menu .menu_login';
    static logoutSubmenuLink = '#main_menu .menu_logout';


    static getAccountLoginPage() {
        this.clickOnSubmenuItem(this.homeMenuLink, this.accountSubmenuLink, this.loginSubmenuLink);
        return new AccountLoginPage();
    };
    static logoutFromHomeDropdownMenu() {
        this.clickOnSubmenuItem(this.homeMenuLink, this.accountSubmenuLink, this.logoutSubmenuLink)
        return new AccountLogoutPage();
    };
}
export default CategorymenuPage;
