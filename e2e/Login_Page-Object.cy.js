import Homepage from '../Utils/HomePage.js'
import LoginPage from '../Utils/LoginPage.js'

describe('Login', () => {
    beforeEach(()=> {
        cy.waitForApiAs("POST",'/autentificare?back=my-account','isLoggedIn')
        cy.visit(Cypress.env('login_url'))
    })
    const valid_user = Cypress.env('user')
    const valid_pass = Cypress.env('password')
    const invalid_user = Cypress.env('invalid_user')
    const invalid_pass = Cypress.env('invalid_password')

    it('Login with valid credentials', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithValidCredentials(valid_user, valid_pass);
    })

    it('Login with invalid user and valid password', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithInvalidUserAndValidPassword(invalid_user, valid_pass);
    })

    it('Login with valid user and invalid password', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithInvalidUserAndValidPassword(valid_user, invalid_pass);
    })

    it('Login with valid user and null password', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithValidUserAndNullPassword(valid_user);
    })

    it('Login with null user and valid password', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithNullUserAndValidPassword(valid_pass);
    })

    it('Login with null user and null password', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnAuthButton();
        LoginPage.LoginWithNullUserAndNullPassword();
    })
})