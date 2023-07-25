Feature: Interact with products

  Scenario: Add and remove products from the cart

    Given demoblaze.com is loaded
    When I add a new product to the cart
    Then I see a "Product added" message
    And My product is inside the cart

    When I remove a product from the cart
    Then My product is not inside the cart anymore
