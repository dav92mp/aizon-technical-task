import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pages/HomePage"
import SignUpModal from "../../modals/SignUpModal"
import LogInModal from "../../modals/LogInModal"
import Alerts from "../../modals/Alerts"

Given('demoblaze.com is loaded', function() {
    cy.loadDemoblaze()
})

When('I sign up a new user', function () {
    let username = 'user' + Date.now()
    cy.wrap(username).as('username')
    let password = 'test'
    cy.wrap(password).as('password')

    HomePage.clickOnSignUpButton()
    SignUpModal.signUpNewUser(username, password)
})

Then('I should see a {string} modal', function () {
    Alerts.modalIsVisible('signup').successfulSignUp()
})

When('I log in with the created user', function () {
    HomePage.clickOnLogInButton()
    LogInModal.logInUser(this.username, this.password)
})
Then('My user is logged in', function () {
    HomePage.userIsLoggedIn(this.username)
        .logInAndSignUpButtonsAreNotVisible()
})

When('I log out with my logged in user', function () {
    HomePage.clickOnLogOutbutton()
})

Then('My user is logged out', function () {
    HomePage.logInAndSignUpButtonsAreVisible()
        .logOutButtonIsNotVisible()
})
