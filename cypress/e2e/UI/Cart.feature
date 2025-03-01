Feature: Cart

  Background:
    Given I am on the home page

  Scenario: Verify Cart page
    When I click on Cart link
    Then Cart page should be opened
    And "<Here>" link exists
    When I click "<Here>" link
    Then We should be moved to Products page

    Examples:
      | Here |
      | here |

  Scenario: Verify Product is added to cart
    When I click Add to cart button on a product
    Then Added! modal appears
    When I click View Cart button
    Then Cart page opens
    And The product is there

