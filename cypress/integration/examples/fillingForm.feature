Feature: Filling the form

Scenario: Add a new product in the cart
	Given I am at home page
    When I fill the form
    Then the form should be saved
