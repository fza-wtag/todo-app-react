import logo from "../icons/logo.svg";
import search from "../icons/searchIcon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>Todos</h3>
      </div>
      <div className="searchHeader">
        <input type="search" placeholder="Search" />
        <button type="submit">
          <img src={search}></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
