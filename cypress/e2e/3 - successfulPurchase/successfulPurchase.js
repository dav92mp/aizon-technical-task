import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pages/HomePage"
import ProductPage from "../../pages/ProductPage"
import Alerts from "../../modals/Alerts"
import CartPage from "../../pages/CartPage"
import PurchaseModal from "../../modals/PurchaseModal"

Given('demoblaze.com is loaded', function() {
    cy.loadDemoblaze()
})

When('I pay the products I have inside my cart', function () {
    HomePage.clickOnProduct('Samsung galaxy s6')
    ProductPage.addProductToCart()
    Alerts.modalIsVisible('addtocart').successfulAddToCart()
    HomePage.clickOnCartButton()
    CartPage.productIsInTheCart()
        .orderProducts()
})

Then('I get a receipt of purchase', function () {
    PurchaseModal.getReceiptOfPurchase()
})

Then('The cart is empty', function () {
    HomePage.clickOnCartButton()
    CartPage.productIsNotInTheCart()
})
