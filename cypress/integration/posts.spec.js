/// <reference types='cypress' />

import { LeftMenuSection } from "../page-objects/left-menu-section";
import { PostsPage } from "../page-objects/posts-page";
import { SiteHomePage } from "../page-objects/site-home-page";


describe('Posts', () => {
    var leftMenuSection = new LeftMenuSection()
    var postsPage = new PostsPage()
    var siteHomePage = new SiteHomePage()

    beforeEach(() => {
        cy.login({username: Cypress.env('testing_valid_username'), password:Cypress.env('testing_valid_password')})
    })

    after(function () {
        postsPage.visit()
        postsPage.postsWithTitleTrashs("Post#1 title").click({multiple: true, force: true}).wait(5000)
    })

    it('Create a new post', () => {
        // add a new post and publish
        leftMenuSection.getPostsOption().click()
        postsPage.getAddNew().click()
        postsPage.getTitle().type("Post#1 title")
        postsPage.getTextEditorView().click()
        postsPage.getPostTextAreaContent().type("Post content with a lot of text")
        postsPage.getPublish().click()
        // check it was added
        postsPage.getMessage().should("be.visible")
            .should("have.css", "border-left-color", "rgb(70, 180, 80)")
            .should("contain.text", "Post published. View post")
        siteHomePage.visit()
        cy.contains(siteHomePage.getArticleHeaders(), "Post#1 title")
        cy.contains(siteHomePage.getArticleBodies(), "Post content with a lot of text")
    })
})