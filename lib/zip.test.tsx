import { zip } from "./zip";

describe("zip", () => {
  it("should take an array of two arrays and returns an array of tuples whose elements are of corresponding index position", () => {
    expect(
      zip([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ])
    ).toEqual([
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ]);
  });
});
