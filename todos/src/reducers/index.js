import todoReducers from "reducers/todoReducers";
import { combineReducers } from "redux";
import toggleReducers from "reducers/toggleReducers";
import currentPageReducer from "reducers/currentPageReducer";

const rootReducer = combineReducers({
  todoReducers,
  toggleReducers,
  currentPageReducer,
});

export default rootReducer;
