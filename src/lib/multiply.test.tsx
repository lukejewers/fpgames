import { multiply } from "./multiply";

describe("multiply", () => {
  it("should multiply together two numbers", () => {
    expect(multiply(2)(3)).toBe(6);
  });
});
