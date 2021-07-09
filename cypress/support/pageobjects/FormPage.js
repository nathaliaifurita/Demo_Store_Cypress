
class FormPage {
    fillFields() {
        cy.get('#user_name').type('Dorothy')
        cy.get('#user_lastname').type('de OZasco')
        cy.get('#user_email').type('dorothydeozasco@teste.com')
        cy.get('#user_address').type('Rua famosa de Osasco, 70')
        cy.get('#user_university').type('Universidade de Ozasco')
        cy.get('#user_profile').type('Analista de Teste')
        cy.get('#user_gender').type('Feminino')
        cy.get('#user_age').type('23')
        cy.contains('Criar').click()
    }

    getName(){
        cy.get('#user_name').should('be.empty')
    }
}

export default FormPage;