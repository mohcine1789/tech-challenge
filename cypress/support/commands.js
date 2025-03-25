// Log In
Cypress.Commands.add('logInAs', (username, password) => {
    cy.visit("");
    cy.get("#login2").click();
    cy.get("#logInModal").should('be.visible');
    cy.get("#loginusername").type(username, { delay: 0 });
    cy.get("#loginpassword").type(password, { delay: 0 });
    cy.get(".modal-footer").contains("Log in").click();
    cy.get("#nameofuser").should("contain.text", username);
})
