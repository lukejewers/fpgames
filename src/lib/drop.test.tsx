import { drop } from "./drop";

describe("drop", () => {
  it("returns an array with n elements dropped from the beginning", () => {
    expect(drop(2)([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  });
});
