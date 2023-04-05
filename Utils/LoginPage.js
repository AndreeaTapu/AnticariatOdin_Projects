class LoginPage {

    /* ------------------------------------ ELEMENTS ------------------------------------*/

    static getUsername() {
        return  cy.get('input[type="email"]');
    }

    static getPassword() {
        return cy.get('input[type="password"]');
    }

    static getLoginButton() {
        return cy.get('.form-footer > .btn');
    }

    static getMyAccountMessage() {
        return cy.get('.page-title').contains('Contul meu');
    }

    static getCookieMessage() {
        return cy.contains('Acceptă');
    }

    static getAuthenticationErrorMessage() {
        return cy.get('.help-block').contains('Autentificare esuata.');
    }

    static getRequiredFieldErrorMessage() {
        return cy.get('div[class="help-block"]').contains('Camp obligatoriu');
    }


    /* ------------------------------------ METHODS ------------------------------------ */

    static LoginWithValidCredentials(user, password) {
        this.getCookieMessage().click();
        this.getUsername().click().type(user);
        this.getPassword().click().type(password);
        this.getLoginButton().click();
        this.getMyAccountMessage().should('be.visible');
        return this
    }

    static LoginWithInvalidUserAndValidPassword(invalid_user, password) {
        this.getCookieMessage().click();
        this.getUsername().click().type(invalid_user);
        this.getPassword().click().type(password);
        this.getLoginButton().click();
        this.getAuthenticationErrorMessage().should('be.visible');
        return this
    }

    static LoginWithValidUserAndInvalidPassword(user, invalid_password) {
        this.getCookieMessage().click();
        this.getUsername().click().type(user);
        this.getPassword().click().type(invalid_password);
        this.getLoginButton().click();
        this.getAuthenticationErrorMessage().should('be.visible');
        return this
    }

    static LoginWithValidUserAndNullPassword(user) {
        this.getCookieMessage().click();
        this.getUsername().click().type(user);
        this.getLoginButton().click();
        this.getRequiredFieldErrorMessage().should('be.visible');
        return this
    }

    static LoginWithNullUserAndValidPassword(password) {
        this.getCookieMessage().click();
        this.getPassword().click().type(password);
        this.getLoginButton().click();
        this.getRequiredFieldErrorMessage().should('be.visible');
        return this
    }

    static LoginWithNullUserAndNullPassword() {
        this.getCookieMessage().click();
        this.getLoginButton().click();
        this.getRequiredFieldErrorMessage().should('be.visible');
        return this
    }

}

export default LoginPage