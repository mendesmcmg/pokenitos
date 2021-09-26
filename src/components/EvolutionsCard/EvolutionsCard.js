import idFinder from "../../utils/idFinder";

function EvolutionsCard({ evolution }) {
  const id = idFinder(evolution.url, "https://pokeapi.co/api/v2/pokemon-species/");
  
  return (
    <>
      <p>{id}</p>
      <img
        alt={evolution.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>{evolution.name}</p>
    </>
  );
}

export default EvolutionsCard;
