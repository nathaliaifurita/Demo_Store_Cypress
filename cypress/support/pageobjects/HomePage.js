const url = Cypress.config("baseUrl")

class HomePage {
    accessPage() {
      cy.visit(url);
    }

    accessForm(){
      cy.contains('Formulário').click()
      cy.get('a[href="/users/new"]').click()
    }
}

export default HomePage;