class Alerts {
    static modalIsVisible(modalType) {
        switch (modalType) {
            case 'signup':
                cy.wait('@signup')
                return {
                    successfulSignUp: () => {
                        cy.on('window:alert', (message) => {
                            expect(message).to.contain('Sign up successful');
                        });
                    },

                    toBeUnsuccessful: () => {
                        //TODO: you can fill here any negative case with sign up error messages
                    }
                }
            case 'addtocart':
                cy.wait('@addtocart')
                return {
                    successfulAddToCart: () => {
                        cy.on('window:alert', (message) => {
                            expect(message).to.contain('Product added');
                        });
                    },

                    toBeUnsuccessful: () => {
                        //TODO: you can fill here any negative case with cart addition error messages
                    }
                }

        }
    }
}

export default Alerts
