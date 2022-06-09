import { useState, useEffect } from "react";

function Crew({ crew }) {
  const [choice, setChoice] = useState("");
  const [correct, setCorrect] = useState("");
  const [randomCrew, setRandomCrew] = useState(
    crew[Math.floor(Math.random() * crew.length)]
  );

  console.log(crew);
  let roles = [...new Set(crew.map((type) => type.role))];
  console.log(roles);

  useEffect(() => {
    setRandomCrew(crew[Math.floor(Math.random() * crew.length)]);
  }, []);
  console.log(randomCrew);
  const checkAnswer = () => {
    if (choice === randomCrew.role) {
      setCorrect("true");
    } else {
      setCorrect("false");
    }
  };
  const handleChoice = (event) => {
    setChoice(event.target.innerText);
  };

  console.log(choice);
  const showCrew = crew.map((person) => {
    return <div key={person._id}>{person.name}</div>;
  });
  const showRoles = roles.map((role, index) => {
    return (
      <div>
        <li onClick={handleChoice} key={index}>
          {role}
        </li>
      </div>
    );
  });

  return (
    <div>
      <h1>Here's the full list</h1>
      {showCrew}
      {randomCrew === undefined ? (
        <div></div>
      ) : (
        <div>
          <h2>What is {randomCrew.name}'s role?</h2>
          <ul>{showRoles}</ul>
          <button onClick={checkAnswer}>submit choice</button>
          {correct === "true" ? (
            <div>correct!</div>
          ) : correct === "false" ? (
            <div>try again! </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}

export default Crew;
