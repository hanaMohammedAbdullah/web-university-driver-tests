describe("first", () => {
  it("first test", () => {
    cy.visit("/");
    cy.log("Hello World!");
    expect(true).to.equal(true);
    cy.get("h1").should("have.text", "Welcome to WebdriverUniversity.com");
  });
});
