import IdFinder from "../../utils/IdFinder";

function EvolutionsCard(props) {
  const id = IdFinder(props.url, "https://pokeapi.co/api/v2/pokemon-species/");

  return (
    <>
      <p>{id}</p>
      <img
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>{props.name}</p>
    </>
  );
}

export default EvolutionsCard;
