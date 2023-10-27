Feature: Place an order for any item 

Background:
  Given User opens login page
  And User enters username: 'standard_user' and password: 'secret_sauce'
  And User clicks login button
  Then User is redirected to the inventory page

Scenario: Place an order for any item 
  When User adds random item to cart
  And User opens shopping cart
  And User goes to checkout page
  And User fills in information form
  And User clicks continue button
  Then Items amount on checkout page is equal: 1
  When User clicks finish button
  Then Order is successfully placed