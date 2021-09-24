import { Grid, Paper, Box, styled, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../../api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { MainPageTitle } from "../styles";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  }));

  useEffect(() => {
    getAllPokemons().then((response) => setPokemons(response));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <MainPageTitle>Pokenitos: uma pokedex ribonita</MainPageTitle>

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
          style={{ padding: "2rem" }}
        >
          <Grid container spacing={3}>
            {filteredPokemons.map((pokemon, i) => (
              <Grid item xs={8} md={2} key={i}>
                <Item>
                  <PokemonCard name={pokemon.name} url={pokemon.url} />
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
