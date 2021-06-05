import { notElem, _notElem } from "./notElem";

describe("notElem", () => {
  it("should return a boolean value as to whether element is not in array", () => {
    expect(notElem(1)([2, 3, 4])).toEqual(true);
    expect(notElem(2)([2, 3, 4])).toEqual(false);
    expect(_notElem(1)([2, 3, 4])).toEqual(true);
    expect(_notElem(2)([2, 3, 4])).toEqual(false);
  });
});
