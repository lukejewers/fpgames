import { and } from "../functions/and";

test("and", () => {
  it("should return the conjunction of two booleans", () => {
    expect(and(true)(false)).toBe(false);
    expect(and(false)(true)).toBe(false);
    expect(and(false)(false)).toBe(false);
    expect(and(true)(true)).toBe(true);
  });
});
