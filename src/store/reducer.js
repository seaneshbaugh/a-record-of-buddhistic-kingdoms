import { combineReducers } from "redux";
import book from "./book/reducer";
import map from "./map/reducer";

const reducers = {
  book,
  map
};

export default combineReducers(reducers);
