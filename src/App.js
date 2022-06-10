import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Characters from "./components/Characters";
import Quotes from "./components/Quotes";
import Episodes from "./components/Episodes";
import Crew from "./components/Crew";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

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
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters characters={characters} />} />
          <Route path="/quotes" element={<Quotes quotes={quotes} characters={characters} />} />
          <Route path="/episodes" element={<Episodes episodes={episodes} />} />
          <Route path="/crew" element={<Crew crew={crew} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
