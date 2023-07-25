Feature: Product purchase

  Scenario: Successful purchase of a product

    Given demoblaze.com is loaded
    When I pay the products I have inside my cart
    Then I get a receipt of purchase
    And The cart is empty
