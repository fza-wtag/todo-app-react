const initialState = {
  currentPage: 1,
};
const currentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};
export default currentPageReducer;


