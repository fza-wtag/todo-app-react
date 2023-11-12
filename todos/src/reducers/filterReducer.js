import { ALL } from "constants";
const initialState = {
  filter: ALL,
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
