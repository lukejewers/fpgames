import { both } from "./both";

describe("both", () => {
  it("should return the conjunction of the boolean outputs of two supplied function applications", () => {
    expect(both((x) => x > 1)((x) => x < 10)(5)).toBe(true);
  });
});
