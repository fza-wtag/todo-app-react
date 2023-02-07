import todoReducers from "reducers/todoReducers";
import { combineReducers } from "redux";
import toggleReducers from "reducers/toggleReducers";

const rootReducer = combineReducers({
  todoReducers,
  toggleReducers,
});

export default rootReducer;
