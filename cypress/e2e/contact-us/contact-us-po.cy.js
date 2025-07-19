import HomePage_PO from "../../support/pageObjects/web-driver-uni/HomePage_PO.JS";
import Contact_Us_PO from "../../support/pageObjects/web-driver-uni/Contact_Us_PO.JS";

describe("Contact Us Form", () => {
  beforeEach(() => {
    // cy.visit("/Contact-Us/contactus.html");
    const homePage = new HomePage_PO();
    homePage.visitHomePage("Contact-Us/contactus.html");
    homePage.clickonContactUsButton();
  });
  it("Should fill out and submit the form", () => {
    // Fill out the form
    // cy.get("input[name='first_name']").type("John");
    // cy.get("input[name='last_name']").type("Doe");
    // cy.get("input[name='email']").type("test@gmail.com");
    // cy.get("textarea[name='message']").type("This is a test message.");
    // cy.get("input[type='submit']").click();
    // cy.get("body").should("contain.text", "Thank You for your Message!");

    const contactUsPO = new Contact_Us_PO();
    contactUsPO.fillContactForm(
      "John",
      "Doe",
      "test@gmail.com",
      "This is a test message."
    );
    contactUsPO.verifySubmissionSuccess();
  });
  it("Should fill out and submit the form WITH invalid data ", () => {
    const contactUsPO = new Contact_Us_PO();
    contactUsPO.fillContactForm(
      "John",
      "Doe",
      "testgmail.com",
      "This is a test message."
    );
    contactUsPO.verifyInvalidEmailMessage();
  });
    it("Should validate the form fields", () => {
        // Check that the first name field is required
        cy.get("input[name='first_name']").focus().blur();
    
        // Check that the last name field is required
        cy.get("input[name='last_name']").focus().blur();
    
        // Check that the email field is required
        cy.get("input[name='email']").focus().blur();
    
        // Check that the message field is required
        cy.get("textarea[name='message']").focus().blur();
        cy.get("input[type='submit']").click();
    
        const contactUsPO = new Contact_Us_PO();
        contactUsPO.verifyAllFieldsRequiredMessage();
    });
    it("Should validate the email format", () => {
        // Enter an invalid email format
        cy.get("input[name='email']").type("invalid-email-format");
        cy.get("input[type='submit']").click();
    
        const contactUsPO = new Contact_Us_PO();
        contactUsPO.verifyInvalidEmailMessage();
    });
  it("Should validate the message length", () => {
    // Enter a message that is too short
    cy.get("textarea[name='message']").type("Hi");
    cy.get("input[type='submit']").click();

    const contactUsPO = new Contact_Us_PO();
    contactUsPO.verifyAllFieldsRequiredMessage();
  })
    it("Should validate the first name length", () => {
        // Enter a first name that is too short
        cy.get("input[name='first_name']").type("A");
        cy.get("input[type='submit']").click();
    
        const contactUsPO = new Contact_Us_PO();
        contactUsPO.verifyAllFieldsRequiredMessage();
    });



});
