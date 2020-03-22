export class WpAdminBarSection {

    getAdminBar() { return cy.get('#wpadminbar') }
    getNewBtn() { return cy.get('[aria-haspopup="true"] > .ab-label') }
    getAdminMyAccount() { return cy.get('#wp-admin-bar-my-account > [aria-haspopup="true"]') }
    getAdminBarSiteName() { return cy.get('#wp-admin-bar-site-name') }
    getAdminVisiteSite() { return cy.get('#wp-admin-bar-view-site a') }
}