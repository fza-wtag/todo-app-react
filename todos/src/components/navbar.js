import logo from "../icons/logo.svg";
import search from "../icons/searchIcon.svg";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h4>Todos</h4>
      </div>
      <div className="searchHeader">
        <input type="search" placeholder="Search" />
        <button type="submit">
          <img src={search} alt="icon"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
