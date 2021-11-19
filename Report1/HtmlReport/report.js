$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/automationpractice/feature/Automationpractice.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Dresses In Automation Practice Application",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Sign in Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;sign-in-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Sign In button In The Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cemailid\u003e\" In Email Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Click On The Sign in Button And It Navigates To The My Account Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;sign-in-page;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 12,
      "id": "shopping-dresses-in-automation-practice-application;sign-in-page;;1"
    },
    {
      "cells": [
        "raj8888@gmail.com",
        "123456789"
      ],
      "line": 13,
      "id": "shopping-dresses-in-automation-practice-application;sign-in-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Sign in Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;sign-in-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Sign In button In The Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"raj8888@gmail.com\" In Email Address Field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"123456789\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Click On The Sign in Button And It Navigates To The My Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 17549138169,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Sign_In_button_In_The_Home_Page()"
});
formatter.result({
  "duration": 15975070723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj8888@gmail.com",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Email_Address_Field(String)"
});
formatter.result({
  "duration": 135981799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 136070751,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Sign_in_Button_And_It_Navigates_To_The_My_Account_Page()"
});
formatter.result({
  "duration": 13141074739,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "My Account Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;my-account-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user Click On The Dresses And It Navigates To Dresses Category Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Dresses_And_It_Navigates_To_Dresses_Category_Page()"
});
formatter.result({
  "duration": 11779573928,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Dresses Category Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;dresses-category-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Click On The Evening Dresses And It Navigates To Catalog Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Evening_Dresses_And_It_Navigates_To_Catalog_Page()"
});
formatter.result({
  "duration": 11340195053,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Catalog Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;catalog-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Click On The Quickview Button And It Navigates To Popup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Quickview_Button_And_It_Navigates_To_Popup_Page()"
});
formatter.result({
  "duration": 10993966219,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Dress Popup Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;dress-popup-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user Select The Number Of Quantity",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Select The Preferred Size",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select The Preferred Colour",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Click On The Add To Cart Button And It Navigates To Proceed To Checkout Popup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Quantity()"
});
formatter.result({
  "duration": 568215418,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Preferred_Size()"
});
formatter.result({
  "duration": 428294064,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Preferred_Colour()"
});
formatter.result({
  "duration": 81894596,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Add_To_Cart_Button_And_It_Navigates_To_Proceed_To_Checkout_Popup_Page()"
});
formatter.result({
  "duration": 61618203,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Proceed To Checkout Popup Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;proceed-to-checkout-popup-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user Click On The Proceed To Checkout Popup Page And It Navigates To Shopping Cart Summary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Proceed_To_Checkout_Popup_Page_And_It_Navigates_To_Shopping_Cart_Summary_Page()"
});
formatter.result({
  "duration": 17485738784,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Shopping Cart Summary Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;shopping-cart-summary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user Click On The Proceed To Checkout Button And Navigates To Delivery Address Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Proceed_To_Checkout_Button_And_Navigates_To_Delivery_Address_Page()"
});
formatter.result({
  "duration": 12735425421,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Delivery Address Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;delivery-address-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user Click On The Proceed To Checkout Button And It Navigates To Shipping Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Proceed_To_Checkout_Button_And_It_Navigates_To_Shipping_Page()"
});
formatter.result({
  "duration": 12279291462,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Shipping Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;shipping-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "user Click On The Terms Of Service Button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User Click On The Proceed To Checkout Button And It Navigates To Payment Method Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Terms_Of_Service_Button()"
});
formatter.result({
  "duration": 3465524401,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Proceed_To_Checkout_Button_And_It_Navigates_To_Payment_Method_Page()"
});
formatter.result({
  "duration": 9574306932,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Payment Method Page",
  "description": "",
  "id": "shopping-dresses-in-automation-practice-application;payment-method-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "user Click On The Pay By Bank Wire Button And It Navigates To Order Summary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Pay_By_Bank_Wire_Button_And_It_Navigates_To_Order_Summary_Page()"
});
formatter.result({
  "duration": 9448631184,
  "status": "passed"
});
});