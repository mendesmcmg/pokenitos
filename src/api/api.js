import axios from "axios";
import evolutionsResponseParser from "../utils/evolutionsResponseParser";

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
    const evolutionsArray = evolutionsResponseParser(res.data);
    return evolutionsArray;
  } catch (e) {
    console.log(e);
  }
};

export const getPokemonType = async (id) => {
  let pokemonTypes = "";
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    pokemonTypes +=response.data.types[0].type.name;
    if (response.data.types[1].type.name) {
      pokemonTypes+= " and " +response.data.types[1].type.name;
    }
    return pokemonTypes;

  } catch (e) {
    console.log(e);
  }
};
