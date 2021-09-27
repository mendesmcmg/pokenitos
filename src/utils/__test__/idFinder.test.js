import idFinder from "../idFinder";

test("should get Id with 1 digit", () => {
  expect(
    idFinder(
      "https://pokeapi.co/api/v2/pokemon/1/",
      "https://pokeapi.co/api/v2/pokemon/"
    )
  ).toBe("1");
});

test("should get Id with 2 digits", () => {
  expect(
    idFinder(
      "https://pokeapi.co/api/v2/pokemon/10/",
      "https://pokeapi.co/api/v2/pokemon/"
    )
  ).toBe("10");
});

test("should get Id with 3 digits", () => {
  expect(
    idFinder(
      "https://pokeapi.co/api/v2/pokemon/100/",
      "https://pokeapi.co/api/v2/pokemon/"
    )
  ).toBe("100");
});
