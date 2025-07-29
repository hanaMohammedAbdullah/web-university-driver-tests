class HomePage_PO {
  visitHomePage(param = "") {
    // cy.visit(Cypress.env("webdriveruni_homepage") + param);
    cy.visit(Cypress.env("webdriveruni_homepage"));
  }

  clickonContactUsButton() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  }

  getContactUsLink() {
    return cy.get("#contact-us");
  }
  getLoginPortalLink() {
    return cy.get("#login-portal");
  }
  getContactUsHeader() {
    return cy.get("#contact-us > .thumbnail > .section-title > h1");
  }
  getLoginPortalHeader() {
    return cy.get("#login-portal > .thumbnail > .section-title > h1");
  }
  getContactUsForm() {
    return cy.get("#contact-us-form");
  }
  getLoginPortalForm() {
    return cy.get("#login-portal-form");
  }
  getContactUsSubmitButton() {
    return cy.get("input[type='submit']");
  }
  getLoginPortalUsernameField() {
    return cy.get("#text");
  }
  getLoginPortalPasswordField() {
    return cy.get("#password");
  }
  getLoginPortalLoginButton() {
    return cy.get("#login-button");
  }
  getContactUsFirstNameField() {
    return cy.get("input[name='first_name']");
  }
  getContactUsLastNameField() {
    return cy.get("input[name='last_name']");
  }
  getContactUsEmailField() {
    return cy.get("input[name='email']");
  }
  getContactUsMessageField() {
    return cy.get("textarea[name='message']");
  }
  getContactUsSuccessMessage() {
    return cy.get("body").should("contain.text", "Thank You for your Message!");
  }
  getContactUsErrorMessage() {
    return cy
      .get("body")
      .should("contain.text", "Error: all fields are required");
  }
  getContactUsInvalidEmailMessage() {
    return cy
      .get("body")
      .should("contain.text", "Error: Invalid email address");
  }
  getLoginPortalAlert() {
    return cy.get("@alertStub");
  }
  getLoginPortalValidationMessage() {
    return cy
      .get("body")
      .should("contain.text", "Please enter username and password");
  }
  getLoginPortalInvalidCredentialsMessage() {
    return cy.get("body").should("contain.text", "Invalid credentials");
  }
  getLoginPortalSuccessMessage() {
    return cy.get("body").should("contain.text", "Validation succeeded");
  }
  getLoginPortalUsername() {
    return "webdriver";
  }
  getLoginPortalPassword() {
    return "webdriver123";
  }
  getContactUsFirstName() {
    return "John";
  }
}

export default HomePage_PO;
