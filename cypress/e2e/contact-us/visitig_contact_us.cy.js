describe("Contact Us", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Visit Contact Us page", () => {
    cy.get("#contact-us > .thumbnail > .section-title > h1").then((data) => {
      cy.log(data.text());
      expect(data.text()).to.eql("CONTACT US");
    });
  });

  it("Visit Contact Us page", () => {
    cy.get("a#contact-us").should("have.attr", "target", "_blank");
    cy.get("a#contact-us").should(
      "have.attr",
      "href",
      "Contact-Us/contactus.html"
    );
  });

  it("Should verify static text content has not changed", () => {
    // Check H1 content
    cy.get("#contact-us h1").should("have.text", "CONTACT US");

    // Check H4 content
    cy.get("#contact-us h4").should("have.text", "Contact Us Form");

    // Check Paragraph text (you can also do partial match with .should('include.text', ...) )
    const expectedText = `Need to perfect your Webdriver Cucumber skills? BDD also referred to as ‘Behaviour Driven Development’ is a great way to test and simulate different user scenarios, for example what happens if you try to use the following contact us form (Click the button to access the challenge) to simulate user(s) inputting different types of data or how about attempting to simulate a user submitting information to the form using an email address in the incorrect ‘Mandatory’ format?`;

    cy.get("#contact-us p").invoke("text").should("eq", expectedText);
  });

  it("Should navigate to the Contact Us page when link is clicked", () => {
    cy.visit("/"); // Adjust if needed

    // Remove target="_blank" to open in the same tab
    cy.get("#contact-us").invoke("removeAttr", "target").click();

    // Now assert the URL
    cy.url().should("include", "Contact-Us/contactus.html");

    // Optionally assert something on the new page
    cy.contains("CONTACT US ").should("exist");
  });
});
