import { nub, _nub } from "./nub";

describe("nub", () => {
  it("should remove duplicate elements from a list", () => {
    expect(nub([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(_nub([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });
});
