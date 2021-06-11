import { gt } from "./gt";

describe("gt", () => {
  it("should return true if first argument is greater than second, false otherwise", () => {
    expect(gt(3)(2)).toBe(true);
    expect(gt(2)(3)).toBe(false);
  });
});
