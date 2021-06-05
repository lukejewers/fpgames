import { init, _init } from "./init";

describe("init", () => {
  it("should return the array supplied without its last element", () => {
    expect(init([1, 2, 3])).toEqual([1, 2]);
    expect(_init([1, 2, 3])).toEqual([1, 2]);
  });
});
