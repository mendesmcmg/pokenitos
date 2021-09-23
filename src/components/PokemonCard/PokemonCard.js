function PokemonCard(props) {
  const id = props.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  // useEffect(() => {
  //   getPokemonDetails(pros.url).then((response) => setPokemons(response));
  // }, []);

  return (
    <>
      <p>{id}</p>
      <img
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      ></img>
      <p>{props.name}</p>
    </>
  );
}

export default PokemonCard;
