import { reverse, _reverse } from "./reverse";

describe("reverse", () => {
  it("should reverse supplied array", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(_reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
