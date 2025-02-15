import { productsListResult } from "../fixtures/ProductsList.json";
import { brandsListResult } from "../fixtures/BrandsList.json";

describe("APIs List for practice", () => {
  it("1. Get All Products List", () => {
    cy.getProductsList(() => {}).then((resp) => {
      cy.log(resp);
      expect(JSON.parse(resp.body)).to.deep.eq(productsListResult);
    });
  });

  it("2. POST To All Products List", () => {
    cy.postToProductsList(0, "Unique title").then((resp) => {
      cy.log(resp);
    });
  });

  it("3. Get All Brands List", () => {
    cy.getBrandsList(() => {}).then((resp) => {
      cy.log(resp);
      expect(JSON.parse(resp.body)).to.deep.eq(brandsListResult);
    });
  });

  it("4. PUT To All Brands List", () => {
    cy.putToBrandsList(1, "Uniqlo").then((resp) => {
      cy.log(resp);
    });
  });

  it("5. POST To Search Product", () => {
    cy.putToBrandsList(1, "Uniqlo").then((resp) => {
      cy.log(resp);
    });
  });
});

// let getTitle;
// describe("JsonPlaceholder", () => {
//   it("Get post", () => {
//     cy.getPosts(() => {}).then((resp) => {
//       cy.log(resp);
//       expect(resp.body.userId).to.eq(1);
//       expect(resp.body.id).to.eq(3);
//       getTitle = resp.body.title;
//     });
//   });
//   it("Create new Post", () => {
//     cy.createPost(152, getTitle).then((resp) => {
//       cy.log(resp.body); // Log the response body or any other data you need
//     });
//   });
// ;
