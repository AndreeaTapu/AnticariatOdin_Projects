Cypress.Commands.add('waitForApiAs', (meth, path, asThis) => { 
    {
      cy.intercept({
        method: meth,
        url: path,
      }).as(asThis);
    }
})