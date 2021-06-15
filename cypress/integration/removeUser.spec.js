describe("Remove user", () => {
  it("Click on remove first user button", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("list-item ez-button .danger").first().click();
    cy.wait(1000);
  });
  it("True when have 2 user card", () => {
    cy.get("list-item").should("have.length", 2);
  });
});
