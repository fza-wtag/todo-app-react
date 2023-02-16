const initialState = {
  iconState: "false",
  searchValue: "",
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ICON_VISIBIlITY":
      return { ...state, iconState: action.iconState };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.searchValue };
    default:
      return state;
  }
};

export default searchReducers;
