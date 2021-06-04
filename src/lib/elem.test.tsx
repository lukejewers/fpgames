import { elem, _elem } from "./elem";

describe("elem", () => {
  it("should return a boolean value as to whether element is in array", () => {
    expect(elem(1)([1, 2, 3])).toEqual(true);
    expect(_elem(1)([1, 2, 3])).toEqual(true);
  });
});
