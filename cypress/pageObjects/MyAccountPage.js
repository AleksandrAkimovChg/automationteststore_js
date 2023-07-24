import BasePage from "./BasePage";
import AccountLogoutPage from "./AccountLogoutPage";

class MyAccountPage extends BasePage {

    logoffLink = '.side_account_list [href*=logout]';

    logoffFromSideMenu() {
        MyAccountPage.clickOnElement(this.logoffLink);
        return new AccountLogoutPage();
    };
}
export default MyAccountPage;


