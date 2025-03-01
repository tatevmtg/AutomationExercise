import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cart } from "../../../Pages/Cart";

When("I click Add to cart button on a product", () => {
  cy.get(cart.LOCATORS.productOnThePage)
    .first()
    .contains("Add to cart")
    .click();
});

Then("Added! modal appears", () => {
  cy.get(cart.LOCATORS.modal)
    .invoke("show")
    .should("contain", cart.NAMES.modalConfirmationText);
});

When("I click View Cart button", () => {
  cy.get(cart.LOCATORS.viewCartUrlOnModal).click();
});

Then("Cart page opens", () => {
  cy.url().should("contain", cart.LOCATORS.cartPageUrl);
});

Then("The product is there", () => {
  cy.get(cart.LOCATORS.firstProductIDInCart).should("be.visible");
});
