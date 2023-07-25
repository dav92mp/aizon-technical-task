import PurchaseModal from "../modals/PurchaseModal";

const DELETE_BUTTON = '[onclick ^= "deleteItem"]'
const ORDER_BUTTON = '.btn-success'
const TOTAL_AMOUNT_COUNTER = '#totalp'

class CartPage {

    static productIsInTheCart() {
        cy.wait('@viewcart')
            .wait('@view')
        cy.get('.success')
            .should('be.visible')
            .and('exist')
            .and('be.visible')
            .and('have.length', 1)
        return CartPage
    }

    static removeProductToCart() {
        cy.get(DELETE_BUTTON)
            .should('be.visible')
            .click()
        return CartPage
    }

    static productIsNotInTheCart() {
        cy.wait('@viewcart')
        cy.get('.success')
            .should('not.exist')
        return CartPage
    }

    static orderProducts() {
        cy.get(TOTAL_AMOUNT_COUNTER).then((counter) => {
            let cartAmount = counter.get(0).innerText

            cy.get(ORDER_BUTTON)
                .should('be.visible')
                .click()

            PurchaseModal.placeOrder(cartAmount)
        })
    }

}

export default CartPage;
