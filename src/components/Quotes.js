import { useState } from "react";

function Quotes({ quotes, characters }) {
  const [show, setShow] = useState(false);
  const [randomQuote, setRandomQuote] = useState({});
  const [choice, setChoice] = useState({});

  let firstOption = randomQuote.character;

  console.log(firstOption);

  const [secondOption, setSecondOption] = useState({});
  const [correct, setCorrect] = useState("");

  const getRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setChoice(characters[Math.floor(Math.random() * characters.length)]);
  };

  const showQuote = () => {
    setShow(true);
    getRandomQuote();
    // let choice = characters[Math.floor(Math.random() * characters.length)];
    if (
      choice.firstname === undefined ||
      choice.firstname === firstOption.firstname
    ) {
      setSecondOption({ firstname: "This is a freebie!", lastname: "" });
    } else {
      setSecondOption(choice);
    }
    setCorrect("");
  };

  return (
    <div className="Quotes">
      <h1>Quotes</h1>
      <p>Guess who said the quote below!</p>
      <button onClick={showQuote}>Let's go!</button>
      {show ? (
        <div>
          <p>"{randomQuote.content}"</p>
          <p
            onClick={() => {
              setCorrect("true");
            }}
          >
            {firstOption.firstname} {firstOption.lastname}
          </p>
          <p>OR</p>
          <p
            onClick={() => {
              setCorrect("false");
            }}
          >
            {secondOption.lastname === "null" ? (
              <div>{secondOption.firstname}</div>
            ) : (
              <div>
                {secondOption.firstname} {secondOption.lastname}
              </div>
            )}
          </p>
        </div>
      ) : (
        <div></div>
      )}
      {correct === "true" ? (
        <div>
          <p>Correct!</p>
          <button onClick={showQuote}>Next Quote</button>
        </div>
      ) : correct === "false" ? (
        <div>Try again! </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Quotes;
