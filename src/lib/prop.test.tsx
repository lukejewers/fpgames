import { prop } from "./prop";

describe("prop", () => {
  it("should returns property of object", () => {
    expect(prop("x")({ x: 1 })).toEqual(1);
  });
});
