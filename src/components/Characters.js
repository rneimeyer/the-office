function Characters({ characters }) {

    const showCharacters = characters.map((character) => {
        if (character.lastname === "null") {
          return (
            <div key={character._id}>
              <h3>{character.firstname}</h3>
            </div>
          );
        } else {
          return (
            <div key={character._id}>
              <h3>
                {character.firstname} {character.lastname}
              </h3>
            </div>
          );
        }
      });
    
      return (
        <div className="characters">
          {showCharacters}
        </div>
      );

}

export default Characters;