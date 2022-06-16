import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Office Trivia!</h1>
      <h2>Want to learn about different episodes and characters?</h2>
      <h3>Visit our <Link to="/characters">Characters</Link> or <Link to="/episodes">Episodes</Link> pages.</h3>
      <h2>Want to take quizzes on quotes and crew members?</h2>
      <h3>Visit our <Link to="/quotes">Quotes</Link> or <Link to="/crew">Crew</Link> pages.</h3>
    </div>
  );
}

export default Home;
