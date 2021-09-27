import types from "../../api/__mocks__/types.json";
import types2 from "../../api/__mocks__/types2.json";
import typesResponseParser from "../typesResponseParser";

test("should get one type", () => {
  expect(typesResponseParser(types)).toEqual("electric");
});

test("should get two types", () => {
  expect(typesResponseParser(types2)).toEqual("grass and poison");
});
