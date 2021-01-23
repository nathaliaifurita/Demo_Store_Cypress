import homePage from '../pageobjects/HomePage'
import ProductPage from '../pageobjects/ProductPage';
import SearchResultPage from '../pageobjects/SearchResultsPage';
const homePage = new HomePage

Given("I am at home page", () => {
    homePage.accessPage();
})

When("I search for the product '{string} and add to the cart", (product) => {
    homePage.searchProduct(product);
    SearchResultPage.viewProductSearched();
    ProductPage.addProductToCart();
})

Then("the product should be at the cart", () => {
    
})