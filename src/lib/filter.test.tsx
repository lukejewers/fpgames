import { filter, _filter } from "./filter";

describe("filter", () => {
  it("should return an array that satisfies a predicate supplied as the first argument", () => {
    expect(filter((x) => x > 3)([1, 2, 3, 4, 5])).toEqual([4, 5]);
    expect(_filter((x) => x > 3)([1, 2, 3, 4, 5])).toEqual([4, 5]);
  });
});
