describe("Home", () => {
  it("Return true when title was foud", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("header > h1").should("have.text", "Teste easynvest");
  });

  it("True when button add new user was foud", () => {
    cy.visit("/");
    cy.get("header > ez-button").should("have.length", 1);
  });

  it("True when have at last 3 user card", () => {
    cy.visit("/");
    cy.get("list-item").should("have.length", 3);
  });

  it("True when have buttons on user card", () => {
    cy.visit("/");
    cy.get("list-item ez-button").should("have.length.at.least", 2);
  });
});
