import * as Endpoints from "../fixtures/endpoints.json";

class User {
    name: string;
    country: string;
    city: string;
    card: string;
    month: string;
    year: string;
}

class CartPage {

    public goToCart() {
        cy.get("#cartur").click();
        return this;
    }

    public placeOrder(user: User) {
        cy.contains("Place Order").click();
        cy.intercept(Endpoints.deletecart).as("deleteCart");

        // fill out the order placement form
        cy.get("#name").type(user.name).should("have.value", user.name);
        cy.get("#country").type(user.country).should("have.value", user.country);
        cy.get("#city").type(user.city).should("have.value", user.city);
        cy.get("#card").type(user.card).should("have.value", user.card);
        cy.get("#month").type(user.month).should("have.value", user.month);
        cy.get("#year").type(user.year).should("have.value", user.year);
        cy.contains("Purchase").click();

        return this;
    }

    public deleteAllItemsIfExisting() {
        cy.intercept(Endpoints.view).as("viewCartItems");
        cy.intercept(Endpoints.deleteitem).as("deleteItem");

        // urgly but necessary :-D
        cy.wait(3000);

        cy.get("body").then((body) => {
            let numberOfItems = body.find("[onclick*=deleteItem]").length;
            if (numberOfItems > 0) {
                for (let i = 0; i < numberOfItems; i++) {
                    cy.get("[onclick*=deleteItem]").first().click({ force: true });
                    cy.wait("@deleteItem").its("response.statusCode").should("eq", 200);
                    cy.wait(1000);
                }
            } else {
                cy.log("The cart is empty.")
            }
        })
    }

    public getPurchaseAlert() {
        return cy.get(".sweet-alert");
    }
}

export default new CartPage();
