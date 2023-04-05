class SignUpPage {

    /* ------------------------------------ ELEMENTS ------------------------------------*/

    static getFirstName() {
        return  cy.get('input[name="firstname"]');
    }

    static getLastName() {
        return cy.get('input[name="lastname"]');
    }

    static getEmail() {
        return cy.get('input[name="email"]');
    }

    static getPassword() {
        return cy.get('input[name="password"]');
    }

    static getTermsAndConditionsButton() {
        return cy.get('input[name="psgdpr"]');
    }

    static getSaveButton() {
        return cy.get('.form-footer > .btn');
    }c

    static getMyAccountMessage() {
        return cy.get('.page-title').contains('Contul meu');
    }

    static getCookieMessage() {
        return cy.contains('Acceptă');
    }

    static getRequiredFieldErrorMessage() {
        return cy.get('div[class="help-block"]').contains('Camp obligatoriu');
    }


    /* ------------------------------------ METHODS ------------------------------------ */

    static SignUpWithValidCredentials(FirstName, Last_Name, email_random, valid_pass) {
        this.getCookieMessage().click();
        this.getFirstName().click().type(FirstName);
        this.getLastName().click().type(Last_Name);
        this.getEmail().click().type(email_random);
        this.getPassword().click().type(valid_pass);
        this.getTermsAndConditionsButton().click();
        this.getSaveButton().click();
        this.getMyAccountMessage().should('be.visible');
        return this
    }

    static SignUpWithMissingCredentials(FirstName, email_random, Password) {
        this.getCookieMessage().click();
        this.getFirstName().click().type(FirstName);
        this.getEmail().click().type(email_random);
        this.getPassword().click().type(Password);
        this.getTermsAndConditionsButton().click();
        this.getSaveButton().click();
        this.getRequiredFieldErrorMessage().should('be.visible');
        return this
    }

}

export default SignUpPage