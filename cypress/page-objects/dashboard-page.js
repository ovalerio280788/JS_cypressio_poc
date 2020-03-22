export class DashboardPage {

    visit() {
        cy.visit("wp-admin/index.php")
        return this
    }

    getWelcomePanel() { return cy.get('#welcome-panel') }
    getDashboardQuickPress() { return cy.get('#dashboard_quick_press') }
    getDashboardActivity() { return cy.get('#dashboard_activity') }
    getDashboardPrimary() { return cy.get('#dashboard_primary') }
    getDashboardRightNow() { return cy.get('#dashboard_right_now') }
}