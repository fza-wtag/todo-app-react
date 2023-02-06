import todoReducers from "reducers/todoReducers";
import { combineReducers } from "redux";
import toggleReducers from "./toggleReducers";
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({
  todoReducers,
  toggleReducers,
  currentPageReducer,
});

export default rootReducer;
