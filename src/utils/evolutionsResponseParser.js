const evolutionsResponseParser = (data) => {
  const evolutionsArray = [];
  evolutionsArray.push(data.chain.species);
  if (data.chain.evolves_to.length > 0) {
    evolutionsArray.push(data.chain.evolves_to[0].species);
    if (data.chain.evolves_to[0].evolves_to.length > 0) {
      evolutionsArray.push(data.chain.evolves_to[0].evolves_to[0].species);
    }
  }
  return evolutionsArray;
};

export default evolutionsResponseParser;
