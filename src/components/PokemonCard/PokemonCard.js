import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { getEvolutions, getPokemonDetails } from "../../api/api";
import IdFinder from "../../utils/IdFinder";
import DetailsCard from "../DetailsCard/DetailsCard";
import EvolutionsCard from "../EvolutionsCard/EvolutionsCard";
import { style } from "./modalStyle";

function PokemonCard(props) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [evolutions, setEvolutions] = useState([]);
  const handleClose = () => setOpen(false);

  const id = IdFinder(props.url, "https://pokeapi.co/api/v2/pokemon/");

  const handleOpen = () => {
    getPokemonDetails(id).then((response) => {
      setDetails(response);
      getPokemonChain(response);
    });
    setOpen(true);
    console.log(details);
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
      <Button onClick={handleOpen}>Ver evoluções</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal de evoluções"
        aria-describedby="mostra evoluções disponíveis para a espécie"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Evoluções de {props.name}
          </Typography>
          {details.color && (
            <DetailsCard
              details={details}
            />
          )}
          {evolutions.map((evolution, i) => (
            <div key={i}>
              <EvolutionsCard name={evolution.name} url={evolution.url} />
            </div>
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default PokemonCard;
