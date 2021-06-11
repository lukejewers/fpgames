import { subtract } from "./subtract";

describe("subtract", () => {
  it("should subtract one number from another and return the result", () => {
    expect(subtract(3)(2)).toEqual(1);
  });
});
