import { useState } from "react";

function Characters({ characters }) {
  const [search, setSearch] = useState("");

  const showCharacters = characters
    .filter((character) => {
      const fullName = character.firstname + " " + character.lastname;
      if (
        character.firstname.toLowerCase().includes(search.toLowerCase()) ||
        character.lastname.toLowerCase().includes(search.toLowerCase()) ||
        fullName.toLowerCase().includes(search.toLowerCase())
      ) {
        return character;
      }
    })
    .map((character) => {
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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="characters">
      <form>
        <input
          placeholder="Search for your favorite character..."
          onChange={handleSearch}
        ></input>
      </form>
      {showCharacters}
    </div>
  );
}

export default Characters;
