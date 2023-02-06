// filterReducer.js
const initialState = {
  filter: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
