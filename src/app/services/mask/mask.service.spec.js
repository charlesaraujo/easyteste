import Mask from "./mask.service";

describe("Masks", () => {
  let mask = new Mask();

  it("Phone: masked returns with number or string(number)", () => {
    expect(mask.phone(99999999999)).toBe("(99) 99999-9999");
    expect(mask.phone("11111111111")).toBe("(11) 11111-1111");

    expect(mask.phone(null)).toBe("");
    expect(mask.phone(false)).toBe("");
    expect(mask.phone()).toBe("");
    expect(mask.phone("abcd")).toBe("");
  });

  it("CPF: masked returns with number or string(number)", () => {
    expect(mask.cpf(33333333333)).toBe("333.333.333-33");
    expect(mask.cpf("44444444444")).toBe("444.444.444-44");

    expect(mask.cpf(null)).toBe("");
    expect(mask.cpf(false)).toBe("");
    expect(mask.cpf()).toBe("");
    expect(mask.cpf("abcd")).toBe("");
  });

  it("Clear: just return a string of numbers", () => {
    expect(mask.clear("(99) 99999-9999")).toBe("99999999999");
    expect(mask.clear("333.333.333-33")).toBe("33333333333");
    expect(mask.clear(1234)).toBe("1234");

    expect(mask.clear(null)).toBe("");
    expect(mask.clear(false)).toBe("");
    expect(mask.clear()).toBe("");
    expect(mask.clear("abcd")).toBe("");
  });
});
