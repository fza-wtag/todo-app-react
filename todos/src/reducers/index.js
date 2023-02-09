import todoReducers from "reducers/todoReducers";
import { combineReducers } from "redux";
import toggleReducers from "reducers/toggleReducers";
import currentPageReducer from "reducers/currentPageReducer";
import filterReducer from "reducers/filterReducer";
import searchReducer from "reducers/searchReducer";
import laodingReducer from "reducers/loadingReducer";

const rootReducer = combineReducers({
  todoReducers,
  toggleReducers,
  currentPageReducer,
  filterReducer,
  searchReducer,
  laodingReducer,
});

export default rootReducer;
