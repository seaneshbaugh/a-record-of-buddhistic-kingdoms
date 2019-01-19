import { createStore, compose } from "redux";
import reducer from "./reducer";

const configureStore = (initialState, services = {}) => {
  const enhancers = [];

  const store = createStore(reducer, initialState, compose(...enhancers));

  return store;
};

export default configureStore;
