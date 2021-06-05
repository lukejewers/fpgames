import { tail, _tail } from "./tail";

describe("tail", () => {
  it("should return the supplied array without the first element", () => {
    expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(_tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });
});
