import React from "react";
import { storiesOf } from "@storybook/react";
import Sentence from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

const text = chapter01.content.paragraphs[0].sentences[0];

storiesOf("atoms/Sentence", module)
  .add("with text", () => (<Sentence text={text} />));
