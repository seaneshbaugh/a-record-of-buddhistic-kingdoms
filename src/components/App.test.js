import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = { title: "Title", subtitle: "Subtitle" };
  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
