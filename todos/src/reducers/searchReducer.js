const initialState = {
  iconState: "false",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ICON_VISIBIlITY":
      return { ...state, iconState: action.iconState };
    default:
      return state;
  }
};

export default searchReducer;
