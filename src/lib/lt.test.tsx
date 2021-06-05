import { lt } from "./lt";

describe("lt", () => {
  it("should return the last element in the supplied array", () => {
    expect(lt(2)(3)).toEqual(true);
    expect(lt(3)(2)).toEqual(false);
  });
});
