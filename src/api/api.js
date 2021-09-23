import axios from "axios";

export const getAllPokemons = async () => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    return res.data.results;

  } catch (e) {
    console.log(e);
  }
};

export const getPokemonChain = async (id) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    return res.data.results;

  } catch (e) {
    console.log(e);
  }
};

