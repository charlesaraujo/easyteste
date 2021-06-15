describe("Update user", () => {
  it("Open and close update user modal", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("list-item ez-button .purple").first().click();
    cy.get("modal-form").should("have.length", 1);
    cy.get("modal-form ez-button .danger").should("have.length", 1).click();
    cy.get("modal-form").should("have.length", 0);
  });

  it("Update user", () => {
    cy.visit("/");
    cy.get("list-item ez-button .purple").first().click();
    cy.get("input[name=name]")
      .clear()
      .type("Charles araujo da silva", { force: true });
    cy.get("input[name=email]").clear().type("charles_araujo@ymail.com", {
      force: true,
    });
    cy.get("input[name=cpf]").clear().type("38093850856", { force: true });
    cy.get("input[name=phone]").clear().type("11986843458", { force: true });
    cy.get("modal-form ez-button .xl").should("have.length", 1).click();
    cy.wait(1200);
  });
});
