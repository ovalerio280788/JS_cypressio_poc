export class SiteHomePage {

    constructor() {
        this.url = '/'
    }

    visit() {
        cy.visit(this.url).wait(500)
        return this
    }

    getPrimary() { return cy.get('#primary') }
    getSecondary() { return cy.get('#secondary') }
    getMastHead() { return cy.get('#masthead') }
    getColophon() { return cy.get('#colophon') }
    getArticleHeaders() { return 'article .entry-header' }
    getArticleBodies() { return 'article .entry-content > p' }
}