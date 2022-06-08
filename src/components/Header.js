import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
          <Link to="/crew">Crew</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
