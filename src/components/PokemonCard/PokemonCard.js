import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { style } from "./modalStyle";

function PokemonCard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const id = props.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

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
