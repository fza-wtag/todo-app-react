import logo from "icons/logo.svg";
import search from "icons/searchIcon.svg";
import "styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <h4>Todos</h4>
      </div>
      <div className="navbar__search">
        <input type="search" placeholder="Search" />
        <button type="submit">
          <img src={search} alt="icon"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
