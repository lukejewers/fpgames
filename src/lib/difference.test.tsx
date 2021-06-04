import { difference, _difference } from "./difference";

describe("difference", () => {
  it("should return the values from the first array that are not present in the second array", () => {
    expect(
      difference([
        [1, 2, 3, 4, 5],
        [1, 3, 5],
      ])
    ).toEqual([2, 4]);
    expect(
      _difference([
        [1, 2, 3, 4, 5],
        [1, 3, 5],
      ])
    ).toEqual([2, 4]);
  });
});
