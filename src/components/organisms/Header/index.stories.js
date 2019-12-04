import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index.js";

storiesOf("organisms/Header", module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add("with title and subtitle", () => (<Header title="This is a title" subtitle="This is a subtitle" />));
