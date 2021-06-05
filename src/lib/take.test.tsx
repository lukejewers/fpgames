import { take } from "./take";

describe("take", () => {
  it("should return an array with n elements taken from the beginning", () => {
    expect(take(3)([1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
  });
});
