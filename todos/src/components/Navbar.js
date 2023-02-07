import logo from "icons/logo.svg";
import search from "icons/searchIcon.svg";
import "styles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setIconVisibility } from "actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchIconState = useSelector((state) => state.searchReducer.iconState);
  const handleSearchIconClick = () => {
    dispatch(setIconVisibility(!searchIconState));
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <h4>Todos</h4>
      </div>
      <div className="navbar__search">
        {!searchIconState && <input type="search" placeholder="Search" />}
        <button type="submit" onClick={handleSearchIconClick}>
          <img src={search} alt="icon"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
