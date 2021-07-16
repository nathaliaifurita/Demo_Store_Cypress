import HomePage from '../pageobjects/HomePage';
import FormPage from '../pageobjects/FormPage';
const homePage = new HomePage();
const formPage = new FormPage();

Given("I am at home page", () => {
    homePage.accessPage();
    homePage.accessForm();
})

When("I fill the form", () => {
    formPage.fillFields();
})

Then("the form should be saved", () => {
    // formPage.getName();
    // cy.get('#user_name').should('be.empty')
    expect('#user_name').should('be.empty');
})