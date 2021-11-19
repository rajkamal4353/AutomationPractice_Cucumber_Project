package com.Runner_Automation_Practice;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.Base_Class_Automation_Practice.Base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)	

@CucumberOptions(features = "src\\test\\java\\com\\automationpractice\\feature\\Automationpractice.feature",

glue = "com.StepD",

monochrome = true,

dryRun = false,

strict = true,

tags = ("~@regressionTest"),

plugin = {"html:Report1/HtmlReport",
		
		  "pretty",   // ---> console
		
		  "json:JsonReport/Report.json",
		
		  "com.cucumber.listener.ExtentCucumberFormatter:ReportNew/ExtentReport.html"}

)

public class Test_Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() {
		
		driver = Base_Class.get_Driver("chrome");
	}
	
	@AfterClass
	public static void tear_Down() {
		
		driver.close();
	}
	
}
