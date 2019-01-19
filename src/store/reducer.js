import { combineReducers } from "redux";
import book from "./book/reducer";

const reducers = {
  book
};

export default combineReducers(reducers);
