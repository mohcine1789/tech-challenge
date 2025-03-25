import * as Endpoints from "../fixtures/endpoints.json";

class ProductPage {
    public addToCart() {
        // intercepting addToCart request to assert its response status code 
        cy.intercept(Endpoints.addtocart).as("addToCart");
        cy.contains("Add to cart").click();
    }
}

export default new ProductPage();
