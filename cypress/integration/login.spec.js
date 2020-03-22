/// <reference types='cypress' />

import { LoginPage } from "../page-objects/login-page";

var invalidUserName = 'invalidusername'
var invalidPassword = 'invalidusername'
var validUserName = 'test'
var validPassword = 'vL$j!Hbp165DMJTx3G{enter}'
var wpAdminUrl = 'http://localhost:8082/wp-admin'

describe('Login Tests', () => {
    var loginPage = new LoginPage()

    beforeEach(() => { loginPage.visit() })

    it('Check login page loads correctly', () => {
        loginPage.getLoginBtn().should('be.enabled').should('be.visible')
        loginPage.getPasswordField().should('be.enabled').should('be.visible')
        loginPage.getWordPressIcon().should('be.visible')
        loginPage.getLoginBtn().should('be.visible').should('have.class', 'button-primary')
        loginPage.getRememberMeCheckBox().should('be.visible').should('be.not.be.checked')
        loginPage.getRememberMeLabel().should('be.visible')
        loginPage.getLostYourPassword().should('be.visible').should("have.text", "Lost your password?")
        loginPage.getBackToBlock().should('be.visible')
    })

    it('Login with invalid username and valid password', () => {
        cy.login({
            username: "invalid_username",
            password: Cypress.env('testing_valid_password')
        })
        loginPage.getLoginError().should("be.visible")
            .should("have.css", "border-left-color", "rgb(220, 50, 50)")
            .should("contain.text", "ERROR: Invalid username. Lost your password?")
    })

    it('Login with valid username and invalid password', () => {
        cy.login({
            username: Cypress.env('testing_valid_username'),
            password: "invalid_password"
        })
        loginPage.getLoginError().should("be.visible")
            .should("have.css", "border-left-color", "rgb(220, 50, 50)")
            .should("contain.text", 'ERROR: The password you entered for the username '
                + Cypress.env('testing_valid_username') + ' is incorrect.')
    })
})