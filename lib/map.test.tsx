import { map, _map } from "./map";
import { add } from "./add";
const inc = add(1);

describe("map", () => {
  it("should ", () => {
    expect(map(inc)([1, 2, 3])).toEqual([2, 3, 4]);
    expect(_map(inc)([1, 2, 3])).toEqual([2, 3, 4]);
  });
});
