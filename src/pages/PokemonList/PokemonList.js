import { Grid, Paper, Box, styled, Container, TextField } from "@mui/material";
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
    <>
      <h1>Pokenitos: uma pokedex ribonita</h1>

      <TextField
        id="standard-search"
        label="Busque seu pokenito aqui"
        type="search"
        variant="standard"
        onChange={(e) => setSearchField(e.target.value)}
        style={{ marginBottom: "3rem", marginLeft: "2rem" }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{ flexGrow: 1 }}
          style={{ backgroundColor: "#EA2B1F", padding: "2rem" }}
        >
          <Grid container spacing={3}>
            {filteredPokemons.map((pokemon, i) => (
              <Grid item xs={8} md={1.9}>
                <Item>
                  <PokemonCard key={i} name={pokemon.name} url={pokemon.url} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default PokemonList;
