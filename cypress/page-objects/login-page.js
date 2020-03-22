export class LoginPage {

    visit() {
        cy.visit('/wp-login.php').wait(500)
        return this
    }

    getUserNameField() { return cy.get('#user_login') }
    getPasswordField() { return cy.get('#user_pass') }
    getLoginBtn() { return cy.get('#wp-submit') }
    getWordPressIcon() { return cy.get('h1 > a') }
    getRememberMeCheckBox() { return cy.get('#rememberme') }
    getRememberMeLabel() { return cy.contains('Remember Me') }
    getLostYourPassword() { return cy.get('#nav > a') }
    getBackToBlock() { return cy.get('#backtoblog > a') }
    getLoginError() { return cy.get('#login_error') }

    loginWithParameters(username, password) {
        this.getUserNameField().type(username)
        this.getPasswordField().type(password + "{enter}")
    }
}