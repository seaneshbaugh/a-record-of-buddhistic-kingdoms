import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configure";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import "leaflet/dist/leaflet.css";
import "./index.css";

const store = configureStore({});

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = document.getElementById("root");

ReactDOM.render(renderApp(), root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
