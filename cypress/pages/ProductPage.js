const ADD_TO_CART_BUTTON = '.product-content .btn'

class ProductPage {

    static addProductToCart() {
        cy.wait('@view')
        cy.get(ADD_TO_CART_BUTTON)
            .should('be.visible')
            .click()
        return ProductPage
    }
}

export default ProductPage;
