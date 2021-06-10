Feature: Addinng items at the cart

Scenario: Add a new product in the cart
	Given I am at home page
  When I search for the product "Lego Batman (Wii)" and add to the cart
  Then the product should be at the cart
