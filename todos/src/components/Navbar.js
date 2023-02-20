import logo from "icons/logo.svg";
import search from "icons/searchIcon.svg";
import "styles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setIconVisibility, setSearchValue } from "actions";
import { useCallback } from "react";
import "styles/loading.css";
import { successMessage } from "toastMethods";
import { SEARCH_DATA_MESSAGE } from "constants";
import { debounce } from "utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchIconState = useSelector((state) => state.searchReducer.iconState);
  const handleSearchIconClick = () => {
    dispatch(setIconVisibility(!searchIconState));
  };

  const handleSearchInput = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const optimizedHandle = useCallback(debounce(handleSearchInput), []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <h4>Todos</h4>
      </div>
      <div className="navbar__search">
        {!searchIconState && (
          <input
            type="search"
            placeholder="Search"
            onChange={optimizedHandle}
          />
        )}
        <button type="submit" onClick={handleSearchIconClick}>
          <img src={search} alt="icon"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
