import evolutions1 from "../../api/__mocks__/evolutions1.json";
import evolutions2 from "../../api/__mocks__/evolutions2.json";
import evolutions3 from "../../api/__mocks__/evolutions3.json";
import evolutionsResponseParser from "../evolutionsResponseParser";

// usar describe?
test("should return array with 1 evolution", () => {
  const evolutions1Output = [
    { name: "kangaskhan", url: "https://pokeapi.co/api/v2/pokemon-species/115/" }
  ];

  expect(evolutionsResponseParser(evolutions1)).toEqual(evolutions1Output);
});

test("should return array with 2 evolutions", () => {
  const evolutions2Output = [
    { name: "diglett", url: "https://pokeapi.co/api/v2/pokemon-species/50/" },
    { name: "dugtrio", url: "https://pokeapi.co/api/v2/pokemon-species/51/" },
  ];

  expect(evolutionsResponseParser(evolutions2)).toEqual(evolutions2Output);
});

test("should return array with 3 evolutions", () => {
  const evolutions3Output = [
    { name: "pichu", url: "https://pokeapi.co/api/v2/pokemon-species/172/" },
    { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon-species/25/" },
    { name: "raichu", url: "https://pokeapi.co/api/v2/pokemon-species/26/" },
  ];

  expect(evolutionsResponseParser(evolutions3)).toEqual(evolutions3Output);
});
