import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedInReducer from "./isLogged";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedInReducer,
});

export default allReducers;
