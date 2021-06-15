describe("New User", () => {
  it("Open and close add new user modal", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("header > ez-button > button").click();
    cy.get("modal-form").should("have.length", 1);
    cy.get("modal-form ez-button .danger").should("have.length", 1).click();
    cy.get("modal-form").should("have.length", 0);
  });

  it("True when have 2 buttons in modal", () => {
    cy.visit("/");
    cy.get("header > ez-button > button").click();
    cy.get("modal-form button").should("have.length", 2);
  });

  it("Close add new user  modal ", () => {
    cy.visit("/");
    cy.get("header > ez-button > button").click();
  });

  it("Add new user", () => {
    cy.visit("/");
    cy.get("header > ez-button > button").click();
    cy.get("input[name=name]").type("Charles araujo da silva", { force: true });
    cy.get("input[name=email]").type("charles_araujo@ymail.com", {
      force: true,
    });
    cy.get("input[name=cpf]").type("38093850856", { force: true });
    cy.get("input[name=phone]").type("11986843458", { force: true });
    cy.get("modal-form ez-button .xl").should("have.length", 1).click();
    cy.wait(1200);
  });

  it("True when have 4 user card", () => {
    cy.get("list-item").should("have.length.at.least", 1);
  });
});
