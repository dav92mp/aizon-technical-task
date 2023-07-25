import HomePage from '../pages/HomePage';

Cypress.Commands.add('loadDemoblaze', () => {
    cy.intercept('/entries').as('entries')
    cy.intercept('/signup').as('signup')
    cy.intercept('/login').as('login')
    cy.intercept('/addtocart').as('addtocart')
    cy.intercept('/view').as('view')
    cy.intercept('/viewcart').as('viewcart')
    cy.intercept('/deletecart').as('deletecart')
    cy.clearAllLocalStorage()
    cy.visit('/')
    HomePage.waitForHomePageToBeLoaded()
})
