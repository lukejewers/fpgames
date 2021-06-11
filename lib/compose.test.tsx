import { compose } from "./compose";
import { add } from "./add";
import { multiply } from "./multiply";

describe("compose", () => {
  it("should successive apply a list of functions to an argument from right to left, where the output of each function application is the input to the next", () => {
    expect(compose(add(1), multiply(2))(3)).toBe(7);
  });
});
