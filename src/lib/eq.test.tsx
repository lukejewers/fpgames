import { eq } from "./eq";

describe("eq", () => {
  it("should return a boolean value as to whether two arguments are equal", () => {
    expect(eq(1)(1)).toBe(true);
  });
});
