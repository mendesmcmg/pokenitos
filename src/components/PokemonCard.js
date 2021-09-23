function PokemonCard(props) {
  const id = props.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  return (
    <>
      <p>{id}</p>
      <p>{props.name}</p>
      <img
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      ></img>
    </>
  );
}

export default PokemonCard;
