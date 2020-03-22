export class LeftMenuSection {
    getDashBoardOption() { return cy.get('#menu-dashboard > .wp-has-submenu > .wp-menu-name') }
    getPostsOption() { return cy.get('#menu-posts > .wp-has-submenu > .wp-menu-name') }
}