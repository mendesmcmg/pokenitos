import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemons } from "./api/api";

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
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>
        <div>
          {pokemons.map((pokemon, i) => (
            <p key={i}>{pokemon.name}</p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
