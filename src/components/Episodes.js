import { useState } from 'react';

function Episodes({ episodes }) {

    const [search, setSearch] = useState("")

  const cleanDate = (date) => {
    const d = new Date(date);
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][d.getUTCMonth()];
    let newDate = month + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
    return newDate;
  };

  const showEpisodes = episodes.filter((episode) =>{
      if (episode.title.toLowerCase().includes(search.toLowerCase())) {
          return episode
      }
  }).map((episode) => {
    return (
      <div>
        <h2>{episode.title}</h2>
        <p>{episode.description}</p>
        <p>Written by: {episode.writer.name}</p>
        <p>Directed by: {episode.director.name}</p>
        <p>Air Date: {cleanDate(episode.airDate)}</p>
      </div>
    );
  });

  const handleSearch = (event) => {
      setSearch(event.target.value);
  }

  return (
    <div>
      Episodes
      <form>
          <input placeholder="Search by title..." onChange={handleSearch}></input>
      </form>
      {showEpisodes}
    </div>
  );
}

export default Episodes;
