import "../src/my-element.js";

describe("array", () => {
  it("indexOf returns -1 if value isnt present", () => {
    expect([1, 2, 3].indexOf(4)).to.equal(-1);
  });
});
