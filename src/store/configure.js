import { createStore, compose } from "redux";
import reducer from "./reducer";

const configureStore = (initialState = {}) => {
  const enhancers = [];

  const store = createStore(reducer, initialState, compose(...enhancers));

  return store;
};

export default configureStore;
