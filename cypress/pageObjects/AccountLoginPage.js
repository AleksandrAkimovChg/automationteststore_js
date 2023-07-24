import BasePage from "./BasePage";
import CreateAccountPage from "./CreateAccountPage";

const USERNAME = Cypress.env('userName');
const PASSWORD = Cypress.env('password');

class AccountLoginPage extends BasePage{

    static loginForm = 'input#loginFrm_loginname';
    static passwordForm = 'input#loginFrm_password';
    static loginButton = 'button[title="Login"]';
    continueButton = 'button[title="Continue"]';


    static fillLoginForm() {
        this.typeTextInForm(this.loginForm, USERNAME)
            .typeTextInForm(this.passwordForm, PASSWORD)
            .clickOnElement(this.loginButton);
    };

    checkoutToRegisterAccount() {
        AccountLoginPage
            .clickOnElement(this.continueButton);
        return new CreateAccountPage();
    };

}
export default AccountLoginPage;
