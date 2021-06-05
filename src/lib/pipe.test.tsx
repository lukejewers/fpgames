import { pipe } from "./pipe";
import { add } from "./add";
import { multiply } from "./multiply";

describe("pipe", () => {
  it("should successively apply a list of functions to an argument from left to right, where the output of each function application is the input to the next", () => {
    expect(pipe(add(1), multiply(2))(3)).toBe(8);
  });
});
