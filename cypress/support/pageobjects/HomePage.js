import homeElements from '../elements/homeElements'
const homeElements = new homeElements
const url = Cypress.config("baseUrl")

class HomePage {
    accessPage() {
      cy.visit(url);
    }

    searchProduct(product){
      homeElements.inputProduct(product);
      homeElements.buttonSubmit();
    }

    searchElement(element){
      homeElements.inputProduct(element);
      homeElements.buttonSubmit();
    }
}

export default HomePage;