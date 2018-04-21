describe("test test", function() {
  it("should render 'Hello World'", function() {
    cy.visit("");

    cy.get("body").should("contain", "It works!");
  });
});