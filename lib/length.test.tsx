import { length, _length } from "./length";

describe("length", () => {
  it("should return the length of an array", () => {
    expect(length([1, 2, 3])).toEqual(3);
    expect(_length([1, 2, 3])).toEqual(3);
  });
});
