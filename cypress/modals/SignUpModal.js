import HomePage from "../pages/HomePage";

class SignUpModal {
    static signUpNewUser(username, password) {
        cy.get('#sign-username')
            .should('be.visible')
            .focus()
            .invoke('val', username);
        cy.get('#sign-password')
            .should('be.visible')
            .focus()
            .invoke('val', password);
        cy.get('#signInModal .btn-primary')
            .should('be.visible')
            .click();
        return HomePage;
    }
}

export default SignUpModal;
