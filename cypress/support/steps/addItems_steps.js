import HomePage from '../pageobjects/HomePage';
import ProductPage from '../pageobjects/ProductPage';
import SearchResultPage from '../pageobjects/SearchResultsPage';
const homePage = new HomePage();
const productPage = new ProductPage();
const searchResultPage = new SearchResultPage();

Given("I am at home page", () => {
    homePage.accessPage();
})

When("I search for the product {string} and add to the cart", (product) => {
    homePage.searchProduct(product);
    searchResultPage.viewProductSearched();
    productPage.addProductToCart();
})

Then("the product should be at the cart", () => {
    
})