import { add } from "../functions/add";

describe("add", () => {
  it("should add together two numbers", () => {
    expect(add(1)(2)).toBe(3);
  });
});
