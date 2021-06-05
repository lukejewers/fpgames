import { or } from "./or";

describe("or", () => {
  it("should return the conjunction of two booleans", () => {
    expect(or(true)(false)).toBe(true);
    expect(or(true)(true)).toBe(true);
    expect(or(false)(true)).toBe(true);
    expect(or(false)(false)).toBe(false);
  });
});
