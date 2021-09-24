import axios from "axios";

export const getAllPokemons = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getEvolutions = async (url) => {
  try {
    const res = await axios.get(url);
    const evolutionsArray = [];
    evolutionsArray.push(res.data.chain.species);
    if (res.data.chain.evolves_to.length > 0) {
      evolutionsArray.push(res.data.chain.evolves_to[0].species);
      if (res.data.chain.evolves_to[0].evolves_to.length > 0) {
        evolutionsArray.push(
          res.data.chain.evolves_to[0].evolves_to[0].species
        );
      }
    }
    return evolutionsArray;
  } catch (e) {
    console.log(e);
  }
};
