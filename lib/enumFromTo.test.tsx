import { enumFromTo } from "./enumFromTo";

describe("enumFromTo", () => {
  it("should enumerate a range of values in an array from given start and end arguments", () => {
    expect(enumFromTo(1)(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
