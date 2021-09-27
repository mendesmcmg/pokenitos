const typesResponseParser = (data) => {
  let pokemonTypes = ""
  pokemonTypes += data.types[0].type.name;
  if (data.types.length > 1) {
    pokemonTypes += " and " + data.types[1].type.name;
  }
  return pokemonTypes;
};

export default typesResponseParser
