import logo from "icons/logo.svg";
import search from "icons/searchIcon.svg";
import "styles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setIconVisibility, setSearchValue, setLoadingState } from "actions";
import { useCallback } from "react";
import "styles/loading.css";
import { successMessage } from "toastMethods";
import { SEARCH_DATA_MESSAGE } from "constants";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchIconState = useSelector(
    (state) => state.searchReducers.iconState
  );
  const handleSearchIconClick = () => {
    dispatch(setIconVisibility(!searchIconState));
  };

  const handleSearchInput = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      dispatch(setLoadingState(true));
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
        dispatch(setLoadingState(false));
        successMessage(SEARCH_DATA_MESSAGE);
      }, 1000);
    };
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
