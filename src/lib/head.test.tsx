import { head, _head } from "./head";

describe("head", () => {
  it("should return the first element of an array", () => {
    expect(head([1, 2, 3])).toEqual(1);
    expect(_head([1, 2, 3])).toEqual(1);
  });
});
