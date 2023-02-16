import todoReducers from "reducers/todoReducers";
import { combineReducers } from "redux";
import toggleReducers from "reducers/toggleReducers";
import currentPageReducer from "reducers/currentPageReducer";
import filterReducer from "reducers/filterReducer";
import searchReducers from "reducers/searchReducers";
import laodingReducer from "reducers/loadingReducers";

const rootReducer = combineReducers({
  todoReducers,
  toggleReducers,
  currentPageReducer,
  filterReducer,
  searchReducers,
  laodingReducer,
});

export default rootReducer;
