class Cart {
  NAMES = {
    modalConfirmationText: "Added!",
  };

  LOCATORS = {
    viewCartUrl: "a[href='/view_cart']",
    productOnThePage: ".product-image-wrapper",
    modal: ".modal-content",
    viewCartUrlOnModal: "u",
    cartPageUrl: "/view_cart",
    productsPageUrl: "/products",
    firstProductIDInCart: "#product-1",
  };
}
export const cart = new Cart();
