require('cypress-xpath')

export class PostsPage {

    visit() {
        cy.visit('/wp-admin/edit.php').wait(1000)
        return this
    }

    getAddNew() { return cy.get('.page-title-action') }
    getTitle() { return cy.get('#title') }
    getTextEditorView() { return cy.get('#content-html') }
    getPostTextAreaContent() { return cy.get('#content') }
    getPublish() { return cy.get('#publish') }
    getMessage() { return cy.get('#message') }

    postsWithTitleTrashs(title) {
        return cy.xpath(`//*[@id="the-list"]//a[@class="row-title"][text()="${title}"]/ancestor::td//*[@class="trash"]/a`)
    }
}