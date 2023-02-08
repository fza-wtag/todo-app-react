import todoReducers from "reducers/todoReducers";
import { combineReducers } from "redux";
import toggleReducers from "reducers/toggleReducers";
import currentPageReducer from "reducers/currentPageReducer";
import filterReducer from "reducers/filterReducer";


const rootReducer = combineReducers({
  todoReducers,
  toggleReducers,
  currentPageReducer,
  filterReducer,
});

export default rootReducer;
