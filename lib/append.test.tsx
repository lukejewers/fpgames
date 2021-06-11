import { append, _append } from "./append";

describe("append", () => {
  it("should append an element onto the end of an array", () => {
    expect(append(1)([1, 2, 3])).toEqual([1, 2, 3, 1]);
    expect(_append(1)([1, 2, 3])).toEqual([1, 2, 3, 1]);
  });
});
