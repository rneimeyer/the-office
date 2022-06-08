import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://www.officeapi.dev/api/characters/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.data));
  }, []);

  const showCharacters = characters.map((character) => {
    if (character.lastname === "null") {
      return (
        <div>
          <h3>{character.firstname}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            {character.firstname} {character.lastname}
          </h3>
        </div>
      );
    }
  });

  return (
    <div className="App">
      <h1>Welcome to Office Trivia!</h1>
      {showCharacters}
    </div>
  );
}

export default App;
