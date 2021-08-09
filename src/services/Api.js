const FetchData = () => {
  return fetch("https://rickandmortyapi.com/documentation/#get-all-characters")
    .then((response) => response.json())
    .then((data) => {
      const result = data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });

      return result;
    });
};

export default FetchData;
