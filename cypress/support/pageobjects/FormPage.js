const faker = require('faker');
const genders = ['male', 'female', 'neuter', 'common'];

class FormPage {
    fillFields() {
        cy.get('#user_name').type(faker.name.firstName())
        cy.get('#user_lastname').type(faker.name.lastName())
        cy.get('#user_email').type(faker.internet.email())
        cy.get('#user_address').type(faker.address.streetAddress())
        cy.get('#user_university').type(faker.address.city() + ' University')
        cy.get('#user_profile').type(faker.name.jobTitle())
        cy.get('#user_gender').type(faker.random.arrayElement(genders))
        cy.get('#user_age').type(faker.datatype.number(100))
        cy.contains('Criar').click()
    }
}

export default FormPage;