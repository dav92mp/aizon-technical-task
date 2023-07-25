Feature: Sign Up process

  Scenario: Sign up with log in and log out

    Given demoblaze.com is loaded
    When I sign up a new user
    Then I should see a "Sign up successful" modal

    When I log in with the created user
    Then My user is logged in

    When I log out with my logged in user
    Then My user is logged out
