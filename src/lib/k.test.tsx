import { k } from "./k";

describe("k", () => {
  it("should return the first argument supplied", () => {
    expect(k(1)(2)).toEqual(1);
  });
});
