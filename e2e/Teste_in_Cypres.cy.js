describe('Tema3_teste_pagina_anticariat', () => {
    beforeEach(( )=>{
    cy.visit(Cypress.env('login_url'))
    })
        const valid_user = Cypress.env('user')
        const valid_pass = Cypress.env('password')
        const invalid_user = Cypress.env('invalid_user')
        const invalid_pass = Cypress.env('invalid_password')
        const Prenume = "Andreea"
        const Nume_de_familie = "Tapu"

        const nr_random = Math.random().toString(36).substring(2, 8);
        const email_random = 'tapuandreea' + nr_random + '@yahoo.com';
        

        it('Login with valid user and valid password', () =>{
            cy.contains ('Contul meu').click()
            cy.contains('Autentificare').click()
            cy.get('input[type="email"]').type(valid_user)
            cy.get('input[type="password"]').type(valid_pass)
            cy.get('.form-footer > .btn').click()
            cy.get('.page-title').contains('Contul meu').should('be.visible')
            cy.url().should('include', '/contul-meu')

        })

        it('Login with invalid user and valid password', () =>{
            cy.contains ('Contul meu').click()
            cy.contains('Autentificare').click()
            cy.get('input[type="email"]').type(invalid_user)
            cy.get('input[type="password"]').type(valid_pass)
            cy.get('.form-footer > .btn').click()
            cy.get('li').contains('Autentificare esuata.').should('be.visible');

         })

        it('Login with valid user and invalid password', () =>{
            cy.contains ('Contul meu').click()
            cy.contains('Autentificare').click()
            cy.get('input[type="email"]').type(valid_user)
            cy.get('input[type="password"]').type(invalid_pass)
            cy.get('.form-footer > .btn').click()
            cy.get('li').contains('Autentificare esuata.').should('be.visible');
        })

        it('Login with valid user and null password', () =>{
            cy.contains ('Contul meu').click()
            cy.contains('Autentificare').click()
            cy.get('input[type="email"]').type(valid_user)
            cy.get('.form-footer > .btn').click()
            cy.get('li').contains('Camp obligatoriu').should('be.visible');
        })

        it('Login with null user and valid password', () =>{
            cy.contains ('Contul meu').click()
            cy.contains('Autentificare').click()
            cy.get('input[type="password"]').type(valid_pass)
            cy.get('.form-footer > .btn').click()
            cy.get('li').contains('Camp obligatoriu').should('be.visible');
        })

        it('Login with null user and null password', () =>{
            cy.contains ('Contul meu').click()
            cy.contains('Autentificare').click()
            cy.get('.form-footer > .btn').click()
            cy.get('li').contains('Camp obligatoriu').should('be.visible');
        })

        it('Add a book into cart', () =>{
            cy.contains ('Contul meu').click()
            cy.contains ('Autentificare').click()
            cy.contains ('Acceptă').click()
            cy.get('input[type="email"]').type(valid_user)
            cy.get('input[type="password"]').type(valid_pass)
            cy.get('.form-footer > .btn').click()
            cy.contains ('Acasă').click()
            cy.get('[class="pb-banner-button btn"]').eq(0).click({ waitForAnimations: false})
            cy.get(':nth-child(1) > .product-miniature > .product-actions.cMobileCat > .ajax-add-to-cart').click()
            cy.wait(10000)
            cy.get('.cart-content > .btn-primary').click()
            cy.get('a').contains('Ai un cod promoțional?').should('be.visible');
        
        })

        it('Delete a book from cart', () =>{
            cy.contains ('Contul meu').click()
            cy.contains ('Autentificare').click()
            cy.contains ('Acceptă').click()
            cy.get('input[type="email"]').type(valid_user)
            cy.get('input[type="password"]').type(valid_pass)
            cy.get('.form-footer > .btn').click()
            cy.contains ('Acasă').click()
            cy.get('[class="pb-banner-button btn"]').eq(0).click({ waitForAnimations: false })
            cy.get(':nth-child(1) > .product-miniature > .product-actions.cMobileCat > .ajax-add-to-cart').click()
            cy.wait(10000)
            cy.get('.cart-content > .btn-primary').click()
            cy.get('.cart-line-product-actions > .remove-from-cart > .icon-close').click()
            cy.get('span').contains('Nu mai sunt produse în coș').should('be.visible');
           
        })

        it('Check that the "Continuă cumpărăturile" button functions properly', () =>{
            cy.contains ('Contul meu').click()
            cy.contains ('Autentificare').click()
            cy.contains ('Acceptă').click();
            cy.get('input[type="email"]').type(valid_user)
            cy.get('input[type="password"]').type(valid_pass)
            cy.get('.form-footer > .btn').click()
            cy.contains ('Acasă').click()
            cy.get('[class="pb-banner-button btn"]').eq(0).click({ waitForAnimations: false })
            cy.get(':nth-child(1) > .product-miniature > .product-actions.cMobileCat > .ajax-add-to-cart').click()
            cy.wait(10000)
            cy.get('.cart-content > .btn-primary').click()
            cy.get('[class="btn btn-outline-dark-2"]').click()
            cy.get('a').contains('Categorii cărți').should('be.visible'); 

        })

        it('Check that an user can create a new account successfully', () =>{
            cy.contains ('Contul meu').click();
            cy.contains ('Înregistrează-te').click();
            cy.contains ('Acceptă').click();
            cy.get('input[name="firstname"]').type(Prenume);
            cy.get('input[name="lastname"]').type(Nume_de_familie);
            cy.get('input[type="email"]').type(email_random);
            cy.get('input[type="password"]').type(valid_pass);
            cy.get('input[type="checkbox"]').eq(1).click();
            cy.contains ('Salvați').click();
            cy.get('.page-title').contains('Contul meu').should('be.visible');
            cy.url().should('include', '/contul-meu');
           
       })
})
