Feature: Shopping Dresses In Automation Practice Application


@smokeTest
Scenario Outline: Sign in Page
Given user Launch The Application
When user Click On The Sign In button In The Home Page
And user Enter The "<emailid>" In Email Address Field
And user Enter The "<password>" In Password Field
Then user Click On The Sign in Button And It Navigates To The My Account Page 
Examples:
|emailid|password|
|raj8888@gmail.com|123456789|

@sanityTest
Scenario: My Account Page 
Then user Click On The Dresses And It Navigates To Dresses Category Page

@sanityTest
Scenario: Dresses Category Page
Then user Click On The Evening Dresses And It Navigates To Catalog Page

@sanityTest
Scenario: Catalog Page
Then user Click On The Quickview Button And It Navigates To Popup Page

@sanityTest
Scenario: Dress Popup Page
When user Select The Number Of Quantity 
And user Select The Preferred Size
And user Select The Preferred Colour
Then user Click On The Add To Cart Button And It Navigates To Proceed To Checkout Popup Page

@sanityTest
Scenario: Proceed To Checkout Popup Page
Then user Click On The Proceed To Checkout Popup Page And It Navigates To Shopping Cart Summary Page

@sanityTest
Scenario: Shopping Cart Summary Page
Then user Click On The Proceed To Checkout Button And Navigates To Delivery Address Page

@sanityTest
Scenario: Delivery Address Page
Then  user Click On The Proceed To Checkout Button And It Navigates To Shipping Page 

@sanityTest
Scenario: Shipping Page
When user Click On The Terms Of Service Button
Then User Click On The Proceed To Checkout Button And It Navigates To Payment Method Page


@smokeTest
Scenario: Payment Method Page
Then user Click On The Pay By Bank Wire Button And It Navigates To Order Summary Page


@regressionTest
Scenario: Order Summary Page
Then user Click On The I Confirm My Order Button And It Navigates To Order Confirmation Page


