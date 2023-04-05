class CartPage {

    /* ------------------------------------ ELEMENTS ------------------------------------*/

    static getAddBooksToCartConfirmationMessage() {
        return cy.contains('Ai un cod promoțional?');
    }

    static getRemoveBooksFromCartConfirmationMessage() {
        return cy.contains('Nu mai sunt produse în coș');
    }

    static getRemoveBookButton() {
        return cy.get('.cart-line-product-actions > .remove-from-cart > .icon-close');
    }

    static getContinueShoppingButton() {
        return cy.get('[class="btn btn-outline-dark-2"]');
    }

    /* ------------------------------------ METHODS ------------------------------------ */

    static SearchAddBooksToCartConfirmationMessage() {
        this.getAddBooksToCartConfirmationMessage().should('be.visible');
        return this
    }

    static SearchRemoveBooksFromCartConfirmationMessage() {
        this.getRemoveBooksFromCartConfirmationMessage().should('be.visible');
        return this
    }
    
    static ClickOnRemoveBookButton() {
        this.getRemoveBookButton().click();
        return this
    }

    static ClickOnContinueShoppingButton() {
        this.getContinueShoppingButton().click();
        return this
    }

}

export default CartPage
