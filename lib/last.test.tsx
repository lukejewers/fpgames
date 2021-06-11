import { last } from "./last";

describe("last", () => {
  it("should return the last element in the supplied array", () => {
    expect(last([1, 2, 3])).toEqual(3);
  });
});
