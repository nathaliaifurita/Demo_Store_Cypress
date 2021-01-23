import searchResultElements from '../elements/searchResultElements'
const searchResultElements = new searchResultElements
const url = Cypress.config("baseUrl")

class SearchResultPage {
    viewProductSearched() {
      searchResultElements.viewProduct().click();
    }
  }

export default SearchResultPage;