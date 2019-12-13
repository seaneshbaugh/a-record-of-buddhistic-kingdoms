import React from "react";
import { storiesOf } from "@storybook/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Paragraph from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

const sentences = chapter01.content.paragraphs[0].sentences;

storiesOf("molecules/Paragraph", module)
  .addDecorator(story => <Provider store={createStore(() => {}, {})}>{story()}</Provider>)
  .add("with sentences", () => (<Paragraph sentences={sentences} />));
