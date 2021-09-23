import { useEffect, useState } from "react";
import { getAllPokemons } from "../../api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    getAllPokemons().then((response) => setPokemons(response));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      <h1>Pokenitos: uma pokedex ribonita</h1>

      <input
        type="search"
        placeholder="busque seu pokenito aqui"
        onChange={(e) => setSearchField(e.target.value)}
      />

      <div>
        {filteredPokemons.map((pokemon, i) => (
          <PokemonCard key={i} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
