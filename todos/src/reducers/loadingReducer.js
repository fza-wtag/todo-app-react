const initialState = {
  loadingState: false,
  splashLoadingState: false,
  cardLoadingState: false,
};
const laodingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_STATE":
      return { ...state, loadingState: action.loadingState };
    case "SET_SPLASH_LOADING_STATE":
      return { ...state, splashLoadingState: action.splashLoadingState };
    case "SET_CARD_LOADING_STATE":
      return { ...state, cardLoadingState: action.cardLoadingState };
    default:
      return state;
  }
};

export default laodingReducer;
