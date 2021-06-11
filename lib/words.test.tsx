import { words } from "./words";

describe("words", () => {
  it("should take a string and create an array of words where the space characters are separators", () => {
    expect(words("hello world")).toEqual(["hello", "world"]);
  });
});
