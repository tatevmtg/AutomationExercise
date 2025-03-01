import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cart } from "../../../Pages/Cart";

Given("I am on the home page", () => {
  cy.visit("https://www.automationexercise.com/");
});

When("I click on Cart link", () => {
  cy.get(cart.LOCATORS.viewCartUrl).first().click();
});

Then("Cart page should be opened", () => {
  cy.url().should("include", cart.LOCATORS.cartPageUrl);
});

Then("{string} link exists", (linkText) => {
  cy.contains(linkText).should("exist");
});

When("I click {string} link", (linkText) => {
  cy.contains(linkText).click();
});

Then("We should be moved to Products page", () => {
  cy.url().should("include", cart.LOCATORS.productsPageUrl);
});
