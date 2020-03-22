/// <reference types='cypress' />

import { WpAdminBarSection } from "../page-objects/wp-admin-bar-section";
import { LeftMenuSection } from "../page-objects/left-menu-section";
import { DashboardPage } from "../page-objects/dashboard-page";
import { SiteHomePage } from "../page-objects/site-home-page";

describe('Dashboard', () => {
    var wpAdminBarSection = new WpAdminBarSection()
    var leftMenuSection = new LeftMenuSection()
    var dashboardPage = new DashboardPage()
    var siteHomePage = new SiteHomePage()

    beforeEach(() => {
        cy.login({username: Cypress.env('testing_valid_username'), password:Cypress.env('testing_valid_password')})
    })

    it('Dashboard page loads the main options in the UI', () => {
        // check admin bar options
        wpAdminBarSection.getAdminBar().should('be.visible')
        wpAdminBarSection.getNewBtn().should('be.visible')
        wpAdminBarSection.getAdminMyAccount().should('be.visible')
        // check left menu options
        leftMenuSection.getDashBoardOption().should('be.visible')
        // check dashboard page section
        dashboardPage.getWelcomePanel().should('be.visible')
        dashboardPage.getDashboardQuickPress().should('be.visible')
        dashboardPage.getDashboardActivity().should('be.visible')
        dashboardPage.getDashboardPrimary().should('be.visible')
        dashboardPage.getDashboardRightNow().should('be.visible')
    })

    it('User should be able visit the site', () => {
        wpAdminBarSection.getAdminBarSiteName().click()
        siteHomePage.getPrimary().should("be.visible")
        siteHomePage.getSecondary().should("be.visible")
        siteHomePage.getMastHead().should("be.visible")
        siteHomePage.getColophon().should("be.visible")
    })
})