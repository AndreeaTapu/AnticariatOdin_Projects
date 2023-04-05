class HomePage {

    /* ------------------------------------ ELEMENTS ------------------------------------*/

    static getMyAccountButton() {
        return cy.contains('Contul meu');
    }

    static getAuthenticateButton() {
        return cy.contains('Autentificare');
    }

    static getSignUpButton() {
        return cy.contains('Înregistrează-te ');
    }

    static getHomeButton() {
        return cy.contains('Acasă');
    }

    static getRecommendButton() {
        return cy.get('[class="pb-banner-button btn"]').eq(0);
    }

    static getAddToCartButton() {
        return cy.get(':nth-child(1) > .product-miniature > .product-actions.cMobileCat > .ajax-add-to-cart');
    }

    static getCompleteTheOrderButton() {
        return cy.get('.cart-content > .btn-primary');
    }

    static getCategoriesBooksField () {
        return cy.get('a').contains('Categorii cărți');
    }

    /* ------------------------------------ METHODS ------------------------------------ */

    static ClickOnMyAccountButton() {
        this.getMyAccountButton().click();
        return this
    }

    static ClickOnAuthButton() {
        this.getAuthenticateButton().click();
        return this
    }

    static ClickOnSignUpButton() {
        this.getSignUpButton().click();
        return this
    }

    static ClickOnHomeButton() {
        this.getHomeButton().click();
        return this
    }

    static ClickOnRecommendButton() {
        this.getRecommendButton().click({ waitForAnimations: false });
        return this
    }

    static ClickOnAddToCartButton() {
        this.getAddToCartButton().click();
        return this
    }

    static ClickOnCompleteTheOrderButton() {
        this.getCompleteTheOrderButton().click();
        return this
    }

    static SearchCategoriesBooksField() {
        this.getCategoriesBooksField().should('be.visible');
        return this
    }

}

export default HomePage
