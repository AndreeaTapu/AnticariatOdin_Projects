import Homepage from '../Utils/HomePage.js'
import SignUpPage from '../Utils/SignUpPage.js'

describe('SignUp', () => {
    beforeEach(()=> {
        cy.visit(Cypress.env('login_url'))
    })

    const nr_random = Math.random().toString(36).substring(2, 8);
    const email_random = 'tapuandreea' + nr_random + '@yahoo.com';
    const Password = "Melccotobelc569."
    const FirstName = "Andreea"
    const Last_Name = "Tapu"


    it('SignUp with valid credentials', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnSignUpButton();
        SignUpPage.SignUpWithValidCredentials(FirstName, Last_Name, email_random ,Password);
    })

    it('SignUp with missing credentials', () =>{

        Homepage.ClickOnMyAccountButton();
        Homepage.ClickOnSignUpButton();
        SignUpPage.SignUpWithMissingCredentials(FirstName, email_random, Password);
    })

})