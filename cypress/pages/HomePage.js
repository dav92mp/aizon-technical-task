import SignUpModal from "../modals/SignUpModal";
import LogInModal from "../modals/LogInModal";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

const PRODUCTS = '.card'
const CART_BUTTON = '#cartur'


class HomePage {

    static waitForHomePageToBeLoaded() {
        cy.wait('@entries');
        return HomePage;
    }

    static clickOnSignUpButton() {
        cy.get('#signin2')
            .should('be.visible')
            .click();
        return SignUpModal;
    }

    static clickOnLogInButton() {
        cy.get('#login2')
            .should('be.visible')
            .click();
        return LogInModal;
    }

    static userIsLoggedIn(username) {
        cy.wait('@login');
        cy.get('#nameofuser')
            .should('be.visible')
            .and('have.text', 'Welcome ' + username);
        return HomePage
    }

    static logInAndSignUpButtonsAreNotVisible() {
        cy.get('#login2')
            .should('not.be.visible')
        cy.get('#signin2')
            .should('not.be.visible')
        return HomePage
    }

    static clickOnLogOutbutton() {
        cy.get('#logout2')
            .should('be.visible')
            .click();
        return HomePage;
    }

    static logInAndSignUpButtonsAreVisible() {
        cy.get('#login2')
            .should('be.visible')
        cy.get('#signin2')
            .should('be.visible')
        return HomePage
    }

    static logOutButtonIsNotVisible() {
        cy.get('#logout2')
            .should('not.be.visible')
        return HomePage
    }

    static clickOnProduct(product) {
        cy.get(PRODUCTS)
            .contains(PRODUCTS, product)
            .then((selectedProduct) => {
                selectedProduct.find('a').get(0).click()
            })
        return ProductPage
    }

    static clickOnCartButton() {
        cy.get(CART_BUTTON)
            .should('be.visible')
            .click()
        return CartPage
    }
}

export default HomePage;
