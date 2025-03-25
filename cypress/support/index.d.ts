declare namespace Cypress {
    interface Chainable<Subject> {
        logInAs(username: string, password: string): Chainable<JQuery<any>>;
    }
}