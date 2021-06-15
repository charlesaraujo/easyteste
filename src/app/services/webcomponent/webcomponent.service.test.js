/**
 * @jest-environment jsdom
 */

import WebComponent from "./webcomponent.service";

describe("WebComponent", () => {
  let wc = new WebComponent();

  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("webComponent: shoud create a div with the string of parent", () => {
    wc.create("body", "div");
    expect(document.body.innerHTML).toEqual("<div></div>");
  });

  it("webComponent: shoud create a div with the element parent", () => {
    wc.create(document.body, "div");
    expect(document.body.innerHTML).toEqual("<div></div>");
  });

  it("webComponent: not execute without params", () => {
    wc.create();
    expect(document.body.innerHTML).toEqual("");
  });
});
