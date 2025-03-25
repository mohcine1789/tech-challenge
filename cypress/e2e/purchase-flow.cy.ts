
import cartPage from "../pages/cart-page";
import homePage from "../pages/home-page";
import * as User from "../fixtures/user.json";
import * as Messages from "../fixtures/messages.json";
import * as Credentials from "../fixtures/credentials.json";


describe('Purchase flow', () => {

  beforeEach(() => {
    // make sure the cart is empty before running the tests
    cy.logInAs(Credentials.username, Credentials.password);
    homePage.goToCart();
    cartPage.deleteAllItemsIfExisting();
  });

  it('should purchase a laptop successfully ', () => {
    homePage.goToPage()
      .goToLaptopsCategorie()
      .selectLaptop()
      .addToCart();
    // assert that item is added successfully into the cart
    cy.wait("@addToCart").its("response.statusCode").should("eq", 200);

    cartPage.goToCart()
      .placeOrder(User)
      .getPurchaseAlert()
      .should("contain.text", Messages.successfulpurchase);
    // assert that the cart is empty after successful purchase
    cy.wait("@deleteCart").its("response.statusCode").should("eq", 200);
  })
})
