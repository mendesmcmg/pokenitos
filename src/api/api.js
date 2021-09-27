import axios from "axios";
import evolutionsResponseParser from "../utils/evolutionsResponseParser";
import typesResponseParser from "../utils/typesResponseParser";

export const getAllPokemons = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    return response.data.results;
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
    const response = await axios.get(url);
    const evolutionsArray = evolutionsResponseParser(response.data);
    return evolutionsArray;
  } catch (e) {
    console.log(e);
  }
};

export const getPokemonType = async (id) => {
    try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    const types = typesResponseParser(response.data);
    return types;
  } catch (e) {
    console.log(e);
  }
};
