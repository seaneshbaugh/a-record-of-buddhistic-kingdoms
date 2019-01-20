import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configure";
import "normalize.css";
import "leaflet/dist/leaflet.css";
import "./index.css";
import book from "./data/book";

const store = configureStore({});

const props = {
  title: "A Record of Buddhistic Kingdoms",
  subtitle: "Being an Account by the Chinese Monk Faxian of his Travels in India and Ceylon in Search of the Buddhist Books of Discipline",
  book: book
};

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <App {...props} />
    </BrowserRouter>
  </Provider>
);

const root = document.getElementById("root");

ReactDOM.render(renderApp(), root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
