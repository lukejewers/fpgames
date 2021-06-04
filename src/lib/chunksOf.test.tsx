import { chunksOf } from "./chunksOf";

describe("chunksOf", () => {
  it("should split an arary into chunks of the supplied length ", () => {
    expect(chunksOf(2)(["a", "b", "c", "d"])).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});
