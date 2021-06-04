import { cons } from "./cons";

describe("cons", () => {
  it("construct an array with a new head by prepending a new element, first argument, onto an array, second argument", () => {
    expect(cons(1)([2, 3])).toEqual([1, 2, 3]);
  });
});
