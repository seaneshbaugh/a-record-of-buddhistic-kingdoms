import React from "react";
import { storiesOf } from "@storybook/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Sentence from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

const text = chapter01.content.paragraphs[0].sentences[0];

storiesOf("molecules/Sentence", module)
  .addDecorator(story => <Provider store={createStore(() => {}, {})}>{story()}</Provider>)
  .add("with text", () => (<Sentence text={text} />));
