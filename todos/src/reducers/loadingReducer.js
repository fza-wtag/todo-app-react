const initialState = {
  loadingState: "false",
};
const laodingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_VISIBIlITY":
      return { ...state, loadingState: action.loadingState };
    default:
      return state;
  }
};

export default laodingReducer;
