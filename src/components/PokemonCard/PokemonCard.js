import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { getEvolutions, getPokemonDetails } from "../../api/api";
import IdFinder from "../../utils/IdFinder";
import { style } from "./modalStyle";

function PokemonCard(props) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const handleClose = () => setOpen(false);

  const id = IdFinder(props.url, "https://pokeapi.co/api/v2/pokemon/");

  const handleOpen = () => {
    getPokemonDetails(id).then((response) => {
      setDetails(response);
      getPokemonChain(response);
    });
    setOpen(true);
  };
  
  const getPokemonChain = (details) => {
    const url = details.evolution_chain.url;
    getEvolutions(url);
  }

  return (
    <>
      <p>{id}</p>
      <img
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      ></img>
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
        </Box>
      </Modal>
    </>
  );
}

export default PokemonCard;
