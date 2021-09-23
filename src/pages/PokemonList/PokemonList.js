import { Grid, styled, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../../api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
      <Grid container>
        {filteredPokemons.map((pokemon, i) => (
          <Grid item xs={4}>
            <Item>
              <PokemonCard key={i} name={pokemon.name} url={pokemon.url} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PokemonList;
