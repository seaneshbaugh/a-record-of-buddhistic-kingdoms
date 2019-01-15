import React from "react";
import { storiesOf } from "@storybook/react";
import Paragraph from "./index.js";
import chapter01 from "../../../data/book/chapter_01.json";

const sentences = chapter01.content.paragraphs[0].sentences;

storiesOf("molecules/Paragraph", module)
  .add("with sentences", () => (<Paragraph sentences={sentences} />));
