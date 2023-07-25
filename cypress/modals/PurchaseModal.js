import HomePage from "../pages/HomePage";

const ORDER_MODAL = '#orderModal'
const TOTAL_AMOUNT = '#totalm'
const TEST_NAME = 'test user'
const TEST_CARD = 'test card'
const NAME = '#name'
const CC = '#card'
const PURCHASE_BUTTON = '[onclick ^= "purchase"]'
const RECEIPT = '.sweet-alert'
var RECEIPT_AMOUNT = ''
const RECEIPT_CONFIRM_BUTTON = '.confirm'

class PurchaseModal {

    static placeOrder(cartAmount) {
        cy.get(ORDER_MODAL)
            .should('be.visible')
        cy.get(TOTAL_AMOUNT)
            .should('be.visible')
            .and('have.text', 'Total: ' + cartAmount)

        let name = 'test user'
        cy.wrap(name).as('name')
        let card = 'test credit card'
        cy.wrap(card).as('card')

        cy.get(NAME)
            .should('be.visible')
            .focus()
            .invoke('val', TEST_NAME);
        cy.get(CC)
            .should('be.visible')
            .focus()
            .invoke('val', TEST_CARD);

        cy.get(PURCHASE_BUTTON)
            .scrollIntoView()
            .should('be.visible')
            .click()

        RECEIPT_AMOUNT = cartAmount

        return PurchaseModal
    }

    static getReceiptOfPurchase() {
        cy.wait('@deletecart')
        cy.get(RECEIPT)
            .should('be.visible')
            .and('contain.text', 'Thank you for your purchase!')
            .and('contain.text', RECEIPT_AMOUNT + ' USD')
            .and('contain.text', TEST_NAME)
            .and('contain.text', TEST_CARD)
        cy.wait(1000)
        cy.get(RECEIPT_CONFIRM_BUTTON)
            .should('be.visible')
            .click()
        cy.wait('@entries')
        return HomePage
    }
}

export default PurchaseModal;
