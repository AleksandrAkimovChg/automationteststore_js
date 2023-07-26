import BasePage from "./BasePage";
import MyAccountPage from "./MyAccountPage";
import AccountLoginPage from "./AccountLoginPage";

class HeaderPage extends BasePage {

    static loginOrRegisterLink = '#customernav';
    static accountMenuLink = '#main_menu_top .menu_account';
    static accountDropdownMenuLoginItem = '#main_menu_top a.menu_login';

    static loginFromLoginOrRegisterLink() {
        this.clickOnElement(this.loginOrRegisterLink);
        AccountLoginPage.fillLoginForm();
        return new MyAccountPage();
    };

    static loginFromAccountLink() {
        this.clickOnElement(this.accountMenuLink);
        AccountLoginPage.fillLoginForm();
        return new MyAccountPage();
    };

    static loginFromAccountLinkDropdownMenu() {
        this.clickOnDropdownMenuItem(this.accountMenuLink, this.accountDropdownMenuLoginItem);
        AccountLoginPage.fillLoginForm();
        return new MyAccountPage();
    };
}
export default HeaderPage;

