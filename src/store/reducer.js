import { combineReducers } from "redux";
import book from "./book/reducer";
import display from "./display/reducer";
import map from "./map/reducer";
import people from "./people/reducer";

const reducers = {
  book,
  display,
  map,
  people
};

export default combineReducers(reducers);
