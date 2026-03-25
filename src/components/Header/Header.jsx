import "./Header.css";
import { Link } from "react-router-dom";
function Header({ counter }) {
  return (
    <header className="header">
      <Link to="/" className="link header__logo">
        Shrine Database
      </Link>
      <div className="header__banner">
        <p className="header__goal">
          Goal: Reaching towards 75,000 shrines in the database | Current
          amount: <span className="header__goal-counter">{counter}</span>
        </p>
      </div>
    </header>
  );
}
export default Header;
