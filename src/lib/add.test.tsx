import { add } from "../functions/add";

test("add", () => {
  it("should add together two numbers", () => {
    expect(add(1)(2)).toBe(3);
  });
});
