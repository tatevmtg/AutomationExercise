import { productsListResult } from "../fixtures/ProductsList.json";
import { brandsListResult } from "../fixtures/BrandsList.json";

Cypress.Commands.add("getProductsList", () => {
  cy.request({
    url: "https://automationexercise.com/api/productsList",
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToProductsList", (number, title) => {
  let newProduct = productsListResult.products[number];
  newProduct.name = title;

  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/productsList",
    body: newProduct,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("getBrandsList", () => {
  cy.request({
    url: "https://automationexercise.com/api/brandsList",
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("putToBrandsList", (number, brand) => {
  let newBrandProduct = brandsListResult.brands[number];
  newBrandProduct.brand = brand;

  cy.request({
    method: "PUT",
    url: "https://automationexercise.com/api/brandsList",
    body: newBrandProduct,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToSearchProduct", (number, brand) => {
  let newBrandProduct = brandsListResult.brands[number];
  newBrandProduct.brand = brand;

  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/searchProduct",
    body: newBrandProduct,
  }).then((resp) => {
    return resp;
  });
});