import SearchResultElements from '../elements/SearchResultElements';
const searchResultElements = new SearchResultElements();
const url = Cypress.config("baseUrl")

class SearchResultPage {
  viewProductSearched() {
      cy.get(searchResultElements.viewProduct()).click();
    }
  }

export default SearchResultPage;
