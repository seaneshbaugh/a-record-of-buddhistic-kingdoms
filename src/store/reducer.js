import { combineReducers } from "redux";
import book from "./book/reducer";
import display from "./display/reducer";
import map from "./map/reducer";

const reducers = {
  book,
  display,
  map
};

export default combineReducers(reducers);
