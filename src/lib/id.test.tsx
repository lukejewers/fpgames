import { id } from "./id";

describe("id", () => {
  it("should return the argument supplied", () => {
    expect(id(1)).toBe(1);
    expect(id("one")).toBe("one");
  });
});
