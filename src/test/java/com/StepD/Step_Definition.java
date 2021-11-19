package com.StepD;

import org.openqa.selenium.WebDriver;
import com.Base_Class_Automation_Practice.Base_Class;
import com.Runner_Automation_Practice.Test_Runner;
import com.Sdp.Page_Object_Manager;
import com.configuration_helper.File_Reader_Manager;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_Class{

	public static WebDriver driver = Test_Runner.driver;
	
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

       @Given("^user Launch The Application$")
       public void user_Launch_The_Application() throws Throwable {
   
    	   String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUrl();
   		   geturl(url);
    	   
       }
       
       @When("^user Click On The Sign In button In The Home Page$")
       public void user_Click_On_The_Sign_In_button_In_The_Home_Page() throws Throwable {
          
    	   click(pom.getInstanceHp().getSignin_Btn());
       }

       @When("^user Enter The \"([^\"]*)\" In Email Address Field$")
       public void user_Enter_The_In_Email_Address_Field(String emailid) throws Throwable {
           
    	   inputelement(pom.getInstanceLg().getUsername(), emailid);
    	   
    	   
       }

       @When("^user Enter The \"([^\"]*)\" In Password Field$")
       public void user_Enter_The_In_Password_Field(String password) throws Throwable {
   
    	   inputelement(pom.getInstanceLg().getPassword(), password);
    	   
       }

       @Then("^user Click On The Sign in Button And It Navigates To The My Account Page$")
       public void user_Click_On_The_Sign_in_Button_And_It_Navigates_To_The_My_Account_Page() throws Throwable {
    
    	   click(pom.getInstanceLg().getSignin_Btn());
    	   
       }

       @Then("^user Click On The Dresses And It Navigates To Dresses Category Page$")
       public void user_Click_On_The_Dresses_And_It_Navigates_To_Dresses_Category_Page() throws Throwable {

    	   imwait(10);
   		
   		   click(pom.getInstanceDr().getDresses());
    	   
       }

       @Then("^user Click On The Evening Dresses And It Navigates To Catalog Page$")
       public void user_Click_On_The_Evening_Dresses_And_It_Navigates_To_Catalog_Page() throws Throwable {
   
    	   click(pom.getInstanceDr().getEvening_Dresses());
    	   
       }

       @Then("^user Click On The Quickview Button And It Navigates To Popup Page$")
       public void user_Click_On_The_Quickview_Button_And_It_Navigates_To_Popup_Page() throws Throwable {
            
    	   jsclick(pom.getInstanceDr().getquickview());
    	   
       }

       @When("^user Select The Number Of Quantity$")
       public void user_Select_The_Number_Of_Quantity() throws Throwable {
    
    	   imwait(10);
   		
           for (int i = 0; i < 10; i++) 
           {		
   		   click(pom.getInstanceQty().getquantity());
   		   }
    	   
       }
       
       @When("^user Select The Preferred Size$")
       public void user_Select_The_Preferred_Size() throws Throwable {
    	   
    		drop_down(pom.getInstanceQty().getsize(), "byindex", "2");
 
       }

       @When("^user Select The Preferred Colour$")
       public void user_Select_The_Preferred_Colour() throws Throwable {
   
    	   click(pom.getInstanceQty().getPink());
    	   
       }

       @Then("^user Click On The Add To Cart Button And It Navigates To Proceed To Checkout Popup Page$")
       public void user_Click_On_The_Add_To_Cart_Button_And_It_Navigates_To_Proceed_To_Checkout_Popup_Page() throws Throwable {
  
    	   click(pom.getInstanceQty().getSubmit());
    	   
       }

       @Then("^user Click On The Proceed To Checkout Popup Page And It Navigates To Shopping Cart Summary Page$")
       public void user_Click_On_The_Proceed_To_Checkout_Popup_Page_And_It_Navigates_To_Shopping_Cart_Summary_Page() throws Throwable {
   
           imwait(5);
   	       screenshot("snap80.png");
   		
   		   click(pom.getInstanceQty().getCheckout());
    	   
       }
 
       @Then("^user Click On The Proceed To Checkout Button And Navigates To Delivery Address Page$")
       public void user_Click_On_The_Proceed_To_Checkout_Button_And_Navigates_To_Delivery_Address_Page() throws Throwable {
    
    	   scroll(pom.getInstanceDscp().getDescription());
           imwait(5);
   	       screenshot("snap81.png");
   		
   		   click(pom.getInstanceDscp().getProceed_to_Checkout());
       }

       @Then("^user Click On The Proceed To Checkout Button And It Navigates To Shipping Page$")
       public void user_Click_On_The_Proceed_To_Checkout_Button_And_It_Navigates_To_Shipping_Page() throws Throwable {
  
    	   scroll(pom.getInstanceDelAdd().getDelivery_Address());
           imwait(5);
   	       screenshot("snap82.png");

   		   click(pom.getInstanceDelAdd().getProceed_Checkout());
    	   
       }

       @When("^user Click On The Terms Of Service Button$")
       public void user_Click_On_The_Terms_Of_Service_Button() throws Throwable {
   
    	   scroll(pom.getInstanceMy_Add().getMy_Address());
           imwait(5);
   	       screenshot("snap83.png");

   		   click(pom.getInstanceMy_Add().getCheckbox());
   		
       }

       @Then("^User Click On The Proceed To Checkout Button And It Navigates To Payment Method Page$")
       public void user_Click_On_The_Proceed_To_Checkout_Button_And_It_Navigates_To_Payment_Method_Page() throws Throwable {
    	  
    	   click(pom.getInstanceMy_Add().getPro_Checkout());
    	   
       }

       @Then("^user Click On The Pay By Bank Wire Button And It Navigates To Order Summary Page$")
       public void user_Click_On_The_Pay_By_Bank_Wire_Button_And_It_Navigates_To_Order_Summary_Page() throws Throwable {
    	
    	   scroll(pom.getInstanceDesc().getDescriptions());
    	   imwait(5);
   	       screenshot("snap84.png");
   		
   		   click(pom.getInstanceDesc().getbank_wire());
       }

       @Then("^user Click On The I Confirm My Order Button And It Navigates To Order Confirmation Page$")
       public void user_Click_On_The_I_Confirm_My_Order_Button_And_It_Navigates_To_Order_Confirmation_Page() throws Throwable {
    	  
    	   click(pom.getInstanceDesc().getmy_order());
    	   
    	   scroll(pom.getInstanceDesc().getorder_complete());
   		   imwait(5);
   		   screenshot("snap85.png");
       }  
       
}
