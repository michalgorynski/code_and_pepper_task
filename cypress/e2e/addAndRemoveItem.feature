Feature: Add any item to cart and remove it

Background:
  Given User opens login page
  And User enters username: 'standard_user' and password: 'secret_sauce'
  And User clicks login button
  Then User is redirected to the inventory page

Scenario: Add any item to cart and remove it
  When User adds random item to cart
  Then Shopping cart badge displays the number: 1
  When User opens shopping cart
  Then Shopping cart items amount is equal: 1
  When User goes to inventory page
  And  User removes all items from cart
  Then Shopping cart badge is not visible
  When User opens shopping cart
  Then Shopping cart is empty