import HomePage from "../pages/HomePage";

class LogInModal {
    static logInUser(username, password) {
        cy.get('#loginusername')
            .should('be.visible')
            .focus()
            .invoke('val', username);
        cy.get('#loginpassword')
            .should('be.visible')
            .focus()
            .invoke('val', password);
        cy.get('#logInModal .btn-primary')
            .should('be.visible')
            .click();
        return HomePage;
    }
}

export default LogInModal;
