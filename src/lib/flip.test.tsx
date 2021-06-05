import { flip } from "./flip";

describe("flip", () => {
  it("should flips the order of arguments", () => {
    expect(flip((x) => (y) => x / y)(2)(4)).toBe(2);
  });
});
