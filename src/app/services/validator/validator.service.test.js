import Validator from "./validator.service";

describe("Validator", () => {
  let validator = new Validator();

  it("Name: valid length", () => {
    expect(validator.name("abc")).toBe(false);
    expect(validator.name()).toBe(false);
    expect(validator.name(12345)).toBe(true);
    expect(validator.name("Charles Araujo da Silva")).toBe(true);
  });

  it("CPF: valid length", () => {
    expect(validator.cpf("abc")).toBe(false);
    expect(validator.cpf()).toBe(false);
    expect(validator.cpf(12345)).toBe(false);
    expect(validator.cpf(12154125632)).toBe(true);
    expect(validator.cpf("12154125632")).toBe(true);
    expect(validator.cpf("121.541.256-32")).toBe(true);
  });

  it("Phone: valid length", () => {
    expect(validator.phone()).toBe(false);
    expect(validator.phone("abc")).toBe(false);
    expect(validator.phone(12345)).toBe(false);
    expect(validator.phone(12154125632)).toBe(true);
    expect(validator.phone("12154125632")).toBe(true);
    expect(validator.phone("(12)15412-5632")).toBe(true);
  });

  it("Email: is a valid email", () => {
    expect(validator.email()).toBe(false);
    expect(validator.email("abc")).toBe(false);
    expect(validator.email(1215)).toBe(false);
    expect(validator.email("charles@comp")).toBe(false);
    expect(validator.email("charles@teste.c")).toBe(false);
    expect(validator.email("charles@mail.com")).toBe(true);
  });
});
