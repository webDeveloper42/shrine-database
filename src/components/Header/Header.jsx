import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link to="/" className="link header__logo">
        Shrine Finder
      </Link>
    </header>
  );
}
export default Header;
