import logo from "icons/logo.svg";
import search from "icons/searchIcon.svg";
import "styles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setIconVisibility, setSearchValue, setLoadingState } from "actions";
import "styles/loading.css";
import { debounce } from "utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchIconState = useSelector(
    (state) => state.searchReducers.iconState
  );
  const handleSearchIconClick = () => {
    dispatch(setIconVisibility(!searchIconState));
    dispatch(setSearchValue(""));
  };
  const handleInputChange = (event) => {
    dispatch(setLoadingState(true));
    handleSearch(event);
  };
  const handleSearchInput = (event) => {
    dispatch(setSearchValue(event.target.value));
    dispatch(setLoadingState(false));
  };
  const handleSearch = debounce(handleSearchInput);

  return (
    <nav className="navbar" data-testid="main-div">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <h4>Todos</h4>
      </div>
      <div className="navbar__search">
        {searchIconState && (
          <input
            type="search"
            placeholder="Search"
            onChange={handleInputChange}
          />
        )}
        <button
          type="submit"
          onClick={handleSearchIconClick}
          data-testid="search-button"
        >
          <img src={search} alt="icon"></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
