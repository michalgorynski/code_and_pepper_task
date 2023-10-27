Feature: Open item details page

Background:
  Given User opens login page
  And User enters username: 'standard_user' and password: 'secret_sauce'
  And User clicks login button
  Then User is redirected to the inventory page

Scenario Outline: Open item details page
  When User opens any item details
  Then Items details page is opened
  And Items details are correct