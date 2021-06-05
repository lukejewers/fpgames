import { unwords } from "./unwords";

describe("unwords", () => {
  it("should take an array of strings and create a string where the space characters are joiners", () => {
    expect(unwords(["hello", "world"])).toEqual("hello world");
  });
});
