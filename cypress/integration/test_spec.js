describe("test test", function() {
  it("should render 'Hello World'", function() {
    cy.visit("");

    cy.get("[data-cy=test-app]").should("contain", "Hello World!");
  });
});