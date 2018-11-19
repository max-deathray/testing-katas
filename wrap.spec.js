const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("New lines are not created in the middle of words", () => {
    expect(wrap("Ceramic Galaxy", 8)).to.equal("Ceramic \nGalaxy");
  });
});
