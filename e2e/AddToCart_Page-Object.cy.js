import CartPage from '../Utils/CartPage.js'
import Homepage from '../Utils/HomePage.js'
import LoginPage from '../Utils/LoginPage.js'

describe('AddToCart', () => {
    beforeEach(()=> {
        cy.visit(Cypress.env('login_url'))
    })
    const valid_user = Cypress.env('user')
    const valid_pass = Cypress.env('password')


    it('Add a book into cart', () =>{
        
        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithValidCredentials(valid_user, valid_pass);
        Homepage.ClickOnHomeButton();
        Homepage.ClickOnRecommendButton();
        Homepage.ClickOnAddToCartButton();
        Homepage.ClickOnCompleteTheOrderButton();
        CartPage.SearchAddBooksToCartConfirmationMessage();
    })

    it('Remove a book from cart', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithValidCredentials(valid_user, valid_pass);
        Homepage.ClickOnHomeButton();
        Homepage.ClickOnRecommendButton();
        Homepage.ClickOnAddToCartButton();
        Homepage.ClickOnCompleteTheOrderButton();
        CartPage.ClickOnRemoveBookButton();
        CartPage.SearchRemoveBooksFromCartConfirmationMessage();
    })

    it('Check that the "Continuă cumpărăturile" button functions properly', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithValidCredentials(valid_user, valid_pass);
        Homepage.ClickOnHomeButton();
        Homepage.ClickOnRecommendButton();
        Homepage.ClickOnAddToCartButton();
        Homepage.ClickOnCompleteTheOrderButton();
        CartPage.ClickOnContinueShoppingButton();
        Homepage.SearchCategoriesBooksField();
    })

})
