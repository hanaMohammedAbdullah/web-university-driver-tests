describe("Login Portal Section", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render the Login Portal section with correct structure", () => {
    cy.get("#login-portal h1").should("have.text", "LOGIN PORTAL");
    cy.get("#login-portal h4").should("have.text", "Login Portal");
    const expectedText = `Are you really an actually user of webdriveruniversity.com? Do you really have a valid username and password? Cucumber enables us to validate multiple sets of username(s) and password(s) with ease by using scenarios outlines and examples! Give the challenge a try!`;
    cy.get("#login-portal p").invoke("text").should("eq", expectedText);
  });

  it("Should validate href and target attributes of the Login Portal link", () => {
    cy.get("#login-portal").should("have.attr", "target", "_blank");
    cy.get("#login-portal").should(
      "have.attr",
      "href",
      "Login-Portal/index.html"
    );
  });

  it("Should navigate to the Login Portal page when clicked", () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click();
    cy.url().should("include", "Login-Portal/index.html");
  });

  describe("Login Portal - Alert-based Validation", () => { 
    beforeEach(() => {
      cy.visit("Login-Portal/index.html"); // adjust path as needed
      cy.window().then((win) => {
        cy.stub(win, "alert").as("alertStub");
      });
    });

    it("Should show alert when both fields are empty", () => {
      cy.get("#login-button").click();
      cy.get("@alertStub").should(
        "have.been.calledWith",
        "Please enter username and password"
      );
    });

    it("Should show alert when username is missing", () => {
      cy.get("#password").type("somePassword");
      cy.get("#login-button").click();
      cy.get("@alertStub").should(
        "have.been.calledWith",
        "Please enter username"
      );
    });

    it.skip("Should show alert when password is missing", () => {
      cy.get("#text").type("someUser");
      cy.get("#login-button").click();
      cy.get("@alertStub").should(
        "have.been.calledWith",
        "Please enter password"
      );
    });

    it.skip("Should show alert for invalid credentials", () => {
      cy.get("#text").type("wrongUser");
      cy.get("#password").type("wrongPass");
      cy.get("#login-button").click();
      cy.get("@alertStub").should(
        "have.been.calledWith",
        "Invalid credentials"
      );
    });

    it.skip("Should show success alert for valid credentials", () => {
      cy.get("#text").type("webdriver");
      cy.get("#password").type("webdriver123");
      cy.get("#login-button").click();
      cy.get("@alertStub").should(
        "have.been.calledWith",
        "Validation succeeded"
      );
    });
  });
});
