import ProductElements from '../elements/ProductElements';
const productElements = new ProductElements();
const url = Cypress.config("baseUrl");

class ProductPage {
  addProductToCart() {
    cy.get(productElements.addToCart()).click();
  }
}

export default ProductPage;
