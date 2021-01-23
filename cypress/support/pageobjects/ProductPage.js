import productElements from '../elements/productElements'
const productElements = new productElements
const url = Cypress.config("baseUrl")

class ProductPage {
    addProductToCart() {
      productElements.addProductToCart();
    }
  }

export default ProductPage;