import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import "leaflet/dist/leaflet.css";
import "./index.css";

const props = {
  title: "A Record of Buddhistic Kingdoms",
  subtitle: "Being an Account by the Chinese Monk Faxian of his Travels in India and Ceylon in Search of the Buddhist Books of Discipline"
};

ReactDOM.render(<App {...props} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
