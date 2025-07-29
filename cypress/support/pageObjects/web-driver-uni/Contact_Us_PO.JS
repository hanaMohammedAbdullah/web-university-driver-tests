class Contact_Us_PO {
  fillContactForm(firstName, lastName, email, comments) {
    cy.get("#contact_form").within(() => {
      cy.get("input[name='first_name']").type(firstName);
      cy.get("input[name='last_name']").type(lastName);
      cy.get("input[name='email']").type(email);
      cy.get("textarea[name='message']").type(comments);
      cy.get("input[type='submit']").click();
    });
  }

  verifySubmissionSuccess() {
    cy.get("body").should("contain.text", "Thank You for your Message!");
  }
  verifyInvalidEmailMessage() {
    cy.get("body").should("contain.text", "Error: Invalid email address");
  }


  verifyRequiredFields(fieldsToCheck) {
    fieldsToCheck.forEach((field) => {
      cy.get(field.selector).focus().blur();
    });
    cy.get("input[type='submit']").click();
    fieldsToCheck.forEach((field) => {
      cy.get("body").should("contain.text", field.errorMessage);
    });
  }

  verifyAllFieldsRequiredMessage() {
    cy.get("body").should("contain.text", "Error: all fields are required");
  }
}

export default Contact_Us_PO;
