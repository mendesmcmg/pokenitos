function DetailsCard({ details }) {
  return (
    <>
      <p>Color: {details.color.name}</p>
      <p>Habitat: {details.habitat.name}</p>
      <p>{details.flavor_text_entries[0].flavor_text}</p>
    </>
  );
}

export default DetailsCard;
