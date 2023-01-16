import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>Todos</h3>
      </div>
      <form action="#">
        <input type="search" className="search-data" placeholder="Search" />
        <button type="submit" className="fas fa-search"></button>
      </form>
    </nav>
  );
};

export default Navbar;
