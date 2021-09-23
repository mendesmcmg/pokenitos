import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemons } from "./api/api";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons()
      .then((response) => setPokemons(response))
  }, []);

  console.log(pokemons)

  return (
    <div>
      <header>
        <h1>Pokenitos: uma pokedex ribonita</h1>
        <div>
          {pokemons.map((pokemon, i) => (
            <PokemonCard key={i} name={pokemon.name} url={pokemon.url}/>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
