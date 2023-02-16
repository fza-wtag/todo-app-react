const initialState = {
  loadingState: false,
  splashLoadingState: false,
  addCardLoadingState: false,
  editCardLoadingState: false,
  deleteCardLoadingState: false,
  completedCardLoadingState: false,
  currentSelectedId: null,
};
const laodingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_STATE":
      return {
        ...state,
        loadingState: action.loadingState,
      };
    case "SET_SPLASH_LOADING_STATE":
      return {
        ...state,
        splashLoadingState: action.splashLoadingState,
      };
    case "SET_ADD_CARD_LOADING_STATE":
      return {
        ...state,
        addCardLoadingState: action.addCardLoadingState,
      };
    case "SET_EDIT_CARD_LOADING_STATE":
      return {
        ...state,
        editCardLoadingState: action.editCardLoadingState,
      };
    case "SET_DELETE_CARD_LOADING_STATE":
      return {
        ...state,
        deleteCardLoadingState: action.deleteCardLoadingState,
      };
    case "SET_COMPLETED_CARD_LOADING_STATE":
      return {
        ...state,
        completedCardLoadingState: action.completedCardLoadingState,
      };
    case "SELECTED_CARD_ID":
      return {
        ...state,
        currentSelectedId: action.currentSelectedId,
      };
    default:
      return state;
  }
};

export default laodingReducer;
