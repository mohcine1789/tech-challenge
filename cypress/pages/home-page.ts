import prodPage from "./prod-page";

class HomePage {
    public goToPage() {
        cy.visit("");
        return this;
    }

    public goToCart() {
        cy.get("#cartur").click();
    }

    public goToLaptopsCategorie() {
        cy.get(".list-group-item").contains("Laptops").click();
        return this;
    }

    public selectLaptop() {
        cy.get(".card-title").contains("MacBook air").click();
        return prodPage;
    }
}

export default new HomePage(); 