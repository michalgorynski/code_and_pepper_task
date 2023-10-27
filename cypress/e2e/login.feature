Feature: Login to inventory page

Scenario Outline: Login to inventory page
  When User opens login page
  And User enters username: '<username>' and password: '<password>'
  And User clicks login button
  Then User is redirected to the inventory page

  Examples:
  |username                 |password    |
  |standard_user            |secret_sauce|
  |locked_out_user          |secret_sauce|
  |problem_user             |secret_sauce|
  |performance_glitch_user  |secret_sauce|
  |error_user               |secret_sauce|
  |visual_user              |secret_sauce|