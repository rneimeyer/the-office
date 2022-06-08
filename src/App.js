import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [crew, setCrew] = useState([])

  useEffect(() => {
    fetch("https://www.officeapi.dev/api/characters/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.data));
    fetch("https://www.officeapi.dev/api/quotes/")
      .then((response) => response.json())
      .then((data) => setQuotes(data.data));
    fetch("https://www.officeapi.dev/api/episodes/")
      .then((response) => response.json())
      .then((data) => setEpisodes(data.data));
    fetch("https://www.officeapi.dev/api/crew/")
      .then((response) => response.json())
      .then((data) => setCrew(data.data))
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Office Trivia!</h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
