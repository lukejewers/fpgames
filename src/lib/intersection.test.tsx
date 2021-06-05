import { intersection, _intersection } from "./intersection";

describe("intersection", () => {
  it("should return the values that are present in the supplied arrays", () => {
    expect(
      intersection([
        [1, 10, 2, 11, 3],
        [4, 1, 5, 2, 6, 3],
        [7, 2, 8, 1, 9, 3],
      ])
    ).toEqual([1, 2, 3]);
    expect(
      _intersection([
        [1, 10, 2, 11, 3],
        [4, 1, 5, 2, 6, 3],
        [7, 2, 8, 1, 9, 3],
      ])
    ).toEqual([1, 2, 3]);
  });
});
