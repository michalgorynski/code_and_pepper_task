Feature: Sort items
Background:
  Given User opens login page
  And User enters username: 'standard_user' and password: 'secret_sauce'
  And User clicks login button
  Then User is redirected to the inventory page

Scenario Outline: Sort items by name '<order>'
  When User sorts items by 'name' '<order>'
  Then Items are sorted by name '<order>'

  Examples:
  |order      |
  |ascending  |
  |descending |


Scenario Outline: Sort items by price '<order>'
  When User sorts items by 'price' '<order>'
  Then Items are sorted by price '<order>'
  
  Examples:
  |order      |
  |ascending  |
  |descending |
