import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pages/HomePage"
import ProductPage from "../../pages/ProductPage"
import Alerts from "../../modals/Alerts"
import CartPage from "../../pages/CartPage"

Given('demoblaze.com is loaded', function() {
    cy.loadDemoblaze()
})

When('I add a new product to the cart', function () {
    HomePage.clickOnProduct('Samsung galaxy s6')
    ProductPage.addProductToCart()
})

Then('I see a {string} message', function () {
    Alerts.modalIsVisible('addtocart').successfulAddToCart()
})

Then('My product is inside the cart', function () {
    HomePage.clickOnCartButton()
    CartPage.productIsInTheCart()
})

When('I remove a product from the cart', function () {
    CartPage.removeProductToCart()
})

Then('My product is not inside the cart anymore', function () {
    CartPage.productIsNotInTheCart()
})
