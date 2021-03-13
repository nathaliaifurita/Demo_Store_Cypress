import HomeElements from '../elements/HomeElements';
const homeElements = new HomeElements();
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