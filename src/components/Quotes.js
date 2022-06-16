import { useEffect, useState } from "react";

function Quotes({ quotes, characters }) {
  const [show, setShow] = useState(false);
  const [randomQuote, setRandomQuote] = useState({});

  let firstOption = randomQuote.character;

  console.log(firstOption);

  const [secondOption, setSecondOption] = useState({});
  const [correct, setCorrect] = useState("")

  const getRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const showQuote = () => {
    getRandomQuote();
    let choice = characters[Math.floor(Math.random() * characters.length)];
    if (choice.firstname === firstOption.firstname) {
      setSecondOption({ firstname: "this is a freebie!", lastname: "" });
    } else {
      setSecondOption(choice);
    }
    setShow(true);
  };
  const correctAnswer = () => {

  }
  const wrongAnswer = () => {

  }
console.log(correct)
  return (
    <div className="Quotes">
      <h1>Quotes</h1>
      <p>Guess who said the quote below!</p>
      <button onClick={showQuote}>Let's go!</button>
      {show ? (
        <div>
          <p>"{randomQuote.content}"</p>
          <p onClick={()=>setCorrect("correct")}>
            {firstOption.firstname} {firstOption.lastname}
          </p>
          <p>OR</p>
          <p onClick={()=>setCorrect("wrong")}>
            {secondOption.firstname} {secondOption.lastname}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Quotes;
