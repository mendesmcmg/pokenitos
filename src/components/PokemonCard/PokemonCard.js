import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  getEvolutions,
  getPokemonDetails,
  getPokemonType,
} from "../../api/api";
import IdFinder from "../../utils/IdFinder";
import DetailsCard from "../DetailsCard/DetailsCard";
import EvolutionsCard from "../EvolutionsCard/EvolutionsCard";
import CircularIndeterminate from "../Spinner/Spinner";
import { style } from "./modalStyle";
import { EvolutionsDiv, PokemonCardTitle } from "./styles";

function PokemonCard(props) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [evolutions, setEvolutions] = useState([]);
  const [type, setType] = useState("");
  const handleClose = () => setOpen(false);

  const id = IdFinder(props.url, "https://pokeapi.co/api/v2/pokemon/");

  const handleOpen = () => {
    getPokemonDetails(id).then((response) => {
      setDetails(response);
      getPokemonChain(response);
      handleType();
    });
    setOpen(true);
  };

  const handleType = () => {
    getPokemonType(id).then((response) => {
      setType(response);
    });
  };

  const getPokemonChain = (details) => {
    const url = details.evolution_chain.url;
    getEvolutions(url).then((response) => {
      setEvolutions(response);
    });
  };

  return (
    <>
      <p>{id}</p>
      <img
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>{props.name}</p>
      <Button variant="contained" onClick={handleOpen}>
        Ver evoluções
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal de evoluções"
        aria-describedby="mostra evoluções disponíveis para a espécie"
      >
        <Box sx={style}>
          <PokemonCardTitle>Evoluções de {props.name}</PokemonCardTitle>

          {details.color && type ? (
            <>
              <DetailsCard details={details} type={type} />

              <EvolutionsDiv>
                {evolutions.map((evolution, i) => (
                  <div key={i}>
                    <EvolutionsCard evolution={evolution} />
                  </div>
                ))}
              </EvolutionsDiv>
            </>
          ) : (
            <CircularIndeterminate style={{ alignSelf: "center" }} />
          )}
        </Box>
      </Modal>
    </>
  );
}

export default PokemonCard;
